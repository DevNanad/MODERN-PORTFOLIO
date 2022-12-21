import create from 'zustand'

export const useTimelineStore = create((set,get) => ({
    //states
    timelinedata: [],



    //functions
    fetchapi: async () => {

        const response = await fetch("https://portfolio-node-api-hjgk.onrender.com/api/timeline");

        const result = await response.json();

        set(() => ({timelinedata: result}))
    }


}))