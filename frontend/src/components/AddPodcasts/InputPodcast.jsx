import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const InputPodcast = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [Drag, setDrag] = useState(false);
  const [audioFile, setAudioFile] = useState(null);

  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
  });

  // Handling Image Upload
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setFrontImage(file);
  };

  const handleDropImage = (e) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files[0];
    setFrontImage(file);
  };

  // Handling Audio Upload
  const handleAudioFile = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  // Handling Input Changes
  const changeInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  // Submit Podcast
  const handleSubmitPodcast = async () => {
    const data = new FormData();
    data.append("title", Inputs.title);
    data.append("description", Inputs.description);
    data.append("category", Inputs.category);
    data.append("frontImage", frontImage);
    data.append("audioFile", audioFile);

    try {
      const res = await axios.post(
        "http://localhost:2001/api/v1/add-podcast",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setInputs({ title: "", description: "", category: "" });
      setAudioFile(null);
      setFrontImage(null);
    }
  };

  return (
    <div className="py-2 px-6 bg-blue-50 h-screen lg:px-12">
      <ToastContainer position="top-center" autoClose={3000} />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Create Your Podcast</h1>

      <div className="flex flex-col lg:flex-row items-start gap-8">
       
        <div className="w-full lg:w-2/6 flex flex-col items-center lg:items-start">
          <div
            className={`size-[30vh] lg:size-[50vh] flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg cursor-pointer ${Drag ? "bg-blue-200" : "bg-gray-100 hover:bg-gray-200"} transition-all duration-300`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropImage}
          >
            <input
              type="file"
              onChange={handleChangeImage}
              accept="image/*"
              id="file"
              className="hidden"
            />
            {frontImage ? (
              <img
                src={URL.createObjectURL(frontImage)}
                alt="Thumbnail"
                className="h-full w-full object-cover rounded-lg"
              />
            ) : (
              <label htmlFor="file" className="text-lg text-gray-600 p-6 text-center">
                Drag & drop the thumbnail or <span className="font-semibold text-blue-600">click to browse</span>
              </label>
            )}
          </div>
        </div>

    
        <div className="w-full lg:w-4/6">
      
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-lg font-medium text-gray-800">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter podcast title"
              className="mt-2 px-4 py-2 outline-none border border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
              value={Inputs.title}
              onChange={changeInputs}
            />
          </div>

      
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="text-lg font-medium text-gray-800">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Describe your podcast"
              className="mt-2 px-4 py-2 outline-none border border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
              value={Inputs.description}
              onChange={changeInputs}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
         
            <div className="flex flex-col w-full lg:w-2/6">
              <label htmlFor="audioFile" className="text-lg font-medium text-gray-800">Upload Audio</label>
              <input
                type="file"
                onChange={handleAudioFile}
                accept=".mp3, .wav, .mp4, .ogg"
                id="audioFile"
                className="mt-2 block px-4 py-2 outline-none border border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>

          
            <div className="flex flex-col w-full lg:w-4/6">
              <label htmlFor="category" className="text-lg font-medium text-gray-800">Select Category</label>
              <select
                name="category"
                id="category"
                className="mt-2 px-4 py-2 outline-none border border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
                value={Inputs.category}
                onChange={changeInputs}
              >
                <option value="">Select Category</option>
                <option value="Comedy">Comedy</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Government">Government</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={handleSubmitPodcast}
              className="bg-blue-900 w-full text-white text-lg font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Create Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPodcast;
