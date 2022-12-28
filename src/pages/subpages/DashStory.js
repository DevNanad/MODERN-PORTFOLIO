import React from "react";
import { useState } from "react";
import { useTimelineStore } from "../../store/zustand";

export default function DashStory() {

  const [imagePath, setImagePath] = useState("")
  const [paraOne, setParaOne] = useState("")
  const [paraTwo, setParaTwo] = useState("")
  const [paraTre, setParaTre] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const { token } = useTimelineStore((state) => state)



  //PARAGRAPH 1
  const handlePatchRequest1 = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:4000/api/admin/story/63ab112d7ecbc1bae3325a2d", {
            method: "PATCH",
            body: JSON.stringify({
                paragraph1: paraOne
            }),
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token.token
            }
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))   
  }


  //PARAGRAPH 2
  const handlePatchRequest2 = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:4000/api/admin/story/63ab112d7ecbc1bae3325a2d", {
            method: "PATCH",
            body: JSON.stringify({
                paragraph2: paraTwo
            }),
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token.token
            }
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    
  }

  //PARAGRAPH 3
  const handlePatchRequest3 = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:4000/api/admin/story/63ab112d7ecbc1bae3325a2d", {
            method: "PATCH",
            body: JSON.stringify({
                paragraph3: paraTre
            }),
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token.token
            }
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    
  }

  const patchStoryImage = async (url) =>{
    await fetch("http://localhost:4000/api/admin/story/63ab112d7ecbc1bae3325a2d", {
            method: "PATCH",
            body: JSON.stringify({
                storyImage: url
            }),
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token.token
            }
        }).then(response => response.json())
        .then(data => {
          //console.log(data)
        })
        .catch(error => console.error(error))
    
  }

  //UPLOAD IMAGE IN CLOUDINARY
  const uploadImage = async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", imagePath)
    formData.append("upload_preset", "wpkq1wg0")

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    await fetch("http://api.cloudinary.com/v1_1/nanad/image/upload", {
    method: "POST",
    body: formData,
    })
    .then(response => response.json())
    .then(data => {
      patchStoryImage(data.url)
      //console.log(data.url)
    })
    .catch(error => console.error(error))

    //console.log(files[0]);

  }

  //PREVIEW IMAGE FUNCTION
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
          <form className="flex items-center gap-4">
            <div className="textarea-holder flex flex-col">
              <label>Paragraph 1</label>
              <textarea
                cols="50"
                rows="4"
                onChange={(e) => {setParaOne(e.target.value)}}
                value={paraOne}
                className="resize-none text-black p-3 outline-none rounded-md"
              />
            </div>

            <button 
            type="submit" 
            onClick={handlePatchRequest1}
            className="bg-blue-400  py-2 px-5 rounded-full font-semibold hover:bg-blue-600">Update</button>
          </form>


          {/* Paragraph 2 */}
          <form className="flex items-center gap-4">
            <div className="textarea-holder flex flex-col">
              <label>Paragraph 2</label>
              <textarea
                cols="50"
                rows="4"
                onChange={(e) => {setParaTwo(e.target.value)}}
                value={paraTwo}
                className="resize-none text-black p-3 outline-none rounded-md"
              />
            </div>

            <button 
            type="submit"
            onClick={handlePatchRequest2} 
            className="bg-blue-400  py-2 px-5 rounded-full font-semibold hover:bg-blue-600">Update</button>
          </form>

          {/* Paragraph 3 */}
          <form className="flex items-center gap-4">
            <div className="textarea-holder flex flex-col">
              <label>Paragraph 3</label>
              <textarea
                cols="50"
                rows="4"
                onChange={(e) => {setParaTre(e.target.value)}}
                value={paraTre}
                className="resize-none text-black p-3 outline-none rounded-md"
              />
            </div>

            <button 
            type="submit"
            onClick={handlePatchRequest3}  
            className="bg-blue-400  py-2 px-5 rounded-full font-semibold hover:bg-blue-600">Update</button>
          </form>

        </div>

        <div className="img-story-holder flex flex-col items-center gap-5 mt-10">
          <img src={imagePath || "https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png"} alt="Preview" className="h-56" />
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
