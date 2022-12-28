import { useTimelineStore } from "../../../store/zustand";

const PatchParag = ({ paraName, paragraph }) => {

    const { token } = useTimelineStore((state) => state)

    const handlePatchRequest = async (e) => {
        e.preventDefault()

        console.log(paraName, paragraph);

        await fetch("http://localhost:4000/api/admin/story/63ab112d7ecbc1bae3325a2d", {
            method: "PATCH",
            body: JSON.stringify({
                paraName: paragraph
            }),
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token.token
            }
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    };

    return (
        <button 
            type="submit" 
            onClick={handlePatchRequest}
            className="bg-blue-400  py-2 px-5 rounded-full font-semibold hover:bg-blue-600">Update</button>
    );
};

export default PatchParag;
