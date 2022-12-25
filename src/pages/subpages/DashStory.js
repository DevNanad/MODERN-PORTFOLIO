import React from "react";
import { useState } from "react";
import { useTimelineStore } from "../../store/zustand";

export default function DashStory() {

  const [imagePath, setImagePath] = useState("")
  const { mystoryUpload } = useTimelineStore((state) => state)


  const uploadImage = () =>{
    mystoryUpload(imagePath)
  }

  const previewImage = (file) =>{
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePath(reader.result)
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className="bg-[#292c35] h-full text-white rounded-lg">
      <h1 className="text-center py-4 font-bold tracking-widest text-xl">Update Story</h1>

      <div className="update-story min-h-fit flex justify-around items-start px-5">

        <div className="parag-form-holder flex flex-col justify-start gap-6">

          {/* Paragraph 1 */}
          <form className="flex items-center gap-2">
            <div className="textarea-holder flex flex-col">
              <label>Paragraph 1</label>
              <textarea
                cols="50"
                rows="4"
                className="resize-none text-black p-3 outline-none rounded-md"
              />
            </div>

            <button type="submit" className="bg-blue-400 py-2 px-5 rounded-full font-semibold">Update</button>
          </form>

          {/* Paragraph 2 */}
          <form className="flex items-center gap-2">
            <div className="textarea-holder flex flex-col">
              <label>Paragraph 2</label>
              <textarea
                cols="50"
                rows="4"
                className="resize-none text-black p-3 outline-none rounded-md"
              />
            </div>

            <button type="submit" className="bg-blue-400 py-2 px-5 rounded-full font-semibold">Update</button>
          </form>

          {/* Paragraph 3 */}
          <form className="flex items-center gap-2">
            <div className="textarea-holder flex flex-col">
              <label>Paragraph 3</label>
              <textarea
                cols="50"
                rows="4"
                className="resize-none text-black p-3 outline-none rounded-md"
              />
            </div>

            <button type="submit" className="bg-blue-400 py-2 px-5 rounded-full font-semibold">Update</button>
          </form>

        </div>

        <div className="img-story-holder flex flex-col items-center gap-5 mt-10">
          <img src={imagePath} alt="Preview" className="h-56" />
          <input 
          type="file" 
          alt="upload preview"
          className="bg-blue-100 text-black outline-none rounded-md"
          onChange={(e) => {previewImage(e.target.files[0])}}/>

          <button onClick={uploadImage} className="bg-red-400 px-5 py-3 rounded-full hover:bg-red-500 font-semibold">Upload Image</button>
        </div>
      </div>
    </div>
  );
}
