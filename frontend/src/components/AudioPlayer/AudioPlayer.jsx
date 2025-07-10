
import React, { useEffect, useRef, useState } from "react";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player.js";

const AudioPlayer = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const dispatch = useDispatch();
  const PlayerDivState = useSelector((state) => state.player.isPlayerDiv);
  const songPath = useSelector((state) => state.player.songPath);
  const img = useSelector((state) => state.player.img);

  const audioRef = useRef(null);


  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };


  const closeAudioPlayerDiv = (e) => {
    e.preventDefault();
    dispatch(playerActions.closeDiv());
    dispatch(playerActions.changeImage(""));
    dispatch(playerActions.changeSong(""));
    setIsSongPlaying(false);
  };

  const handlePlayPodcast = () => {
    if (!audioRef.current) return;

    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.warn("Autoplay blocked:", error);
      });
    }
    setIsSongPlaying(!isSongPlaying);
  };


  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };


  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    if (songPath) {
      const currentAudio = audioRef.current;
      if (currentAudio) {
        currentAudio.addEventListener("timeupdate", handleTimeUpdate);
        currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      }

      return () => {
        if (currentAudio) {
          currentAudio.removeEventListener("timeupdate", handleTimeUpdate);
          currentAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        }
      };
    }
  }, [songPath]);

  return (
    <div className={`${PlayerDivState ? "fixed" : "hidden"} w-[100%] bottom-0 left-0 bg-zinc-900 text-zinc-200 px-4 rounded py-4 flex items-center gap-4`}>
    
      <div className="hidden md:block w-1/3">
        {img && <img src={img} alt="Album Art" className="size-12 rounded-full object-cover" />}
      </div>

  
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-4 text-xl">
          <button>
            <IoPlaySkipBack />
          </button>

          <button onClick={handlePlayPodcast}>
            {isSongPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button>
            <IoPlaySkipForward />
          </button>
        </div>

 
        <div className="w-full flex items-center justify-center mt-3">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = e.target.value;
                setCurrentTime(e.target.value);
              }
            }}
            className="w-full hover:cursor-pointer"
          />
        </div>

 
        <div className="w-full flex items-center justify-between text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

    
      <div className="w-1/3 flex items-center justify-end">
        <button onClick={closeAudioPlayerDiv}>
          <ImCross />
        </button>
      </div>

 
      {songPath && <audio ref={audioRef} src={songPath} />}
    </div>
  );
};

export default AudioPlayer;
