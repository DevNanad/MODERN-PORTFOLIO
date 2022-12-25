import React from "react";
import { useState } from "react";

export default function DashStory() {

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () =>{
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "wpkq1wg0")

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Authorization', `Bearer ${jwt}`);

    fetch("http://api.cloudinary.com/v1_1/nanad/image/upload", {
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


    //console.log(files[0]);
  }

  return (
    <div className="bg-[#292c35] h-full text-white rounded-lg">
      <h1 className="text-center py-4 font-bold tracking-widest text-xl">Update Story</h1>

      <div className="update-story min-h-fit flex justify-between items-start px-5">

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

        <div className="img-story-holder">
          <img src="" alt="" />
          <input 
          type="file" 
          alt="upload preview"
          onChange={(e) => setImageSelected(e.target.files[0])}
           />

          <button onClick={uploadImage}>Upload Image</button>
        </div>
      </div>
    </div>
  );
}
