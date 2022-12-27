import create from 'zustand'


export const useTimelineStore = create((set,get) => ({
    //states
    timelinedata: [],
    token: null,
    username: null,
    isLoading: null,
    setError: null,
    authenticated: false,

    
    


    //functions
    fetchapi: async () => {

        const response = await fetch("https://portfolio-node-api-hjgk.onrender.com/api/timeline");

        const result = await response.json();

        set(() => ({timelinedata: result}))
    },

    mystoryUpload: async (image) => {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "wpkq1wg0")

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Authorization', `Bearer ${jwt}`);

        fetch("http://api.cloudinary.com/v1_1/nanad/image/upload", {
        method: "POST",
        body: formData,
        })
        .then(response => response.json())
        .then(data => console.log(data.secure_url))
        .catch(error => console.error(error))


        //console.log(files[0]);
    },
    

    
    checklogin: (user) => set({token: user}),



    logoutRequest: () =>{
        set({ authenticated: false, token: null, user: null });

        //remove token from local storage
        localStorage.removeItem('user');
    },
    loginRequest: async (username, password) => {

        try {
            set(() => ({isLoading: true}))
            
            const response = await fetch("http://localhost:4000/api/admin/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            })
            const json = await response.json()

            console.log(json);
            

            if(!response.ok){
                set(() => ({isLoading: false}))
                set(() => ({setError: json.error}))
            }

            if(response.ok){
                //save to local storage
                localStorage.setItem('user', JSON.stringify(json))
                

                

                //set login
                set(() => ({authenticated: true, token: json, setError: null}))

                set(() => ({isLoading: false}))
                
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    setUsername: (username) =>{
        set(() => ({username: username}))
    }


}))