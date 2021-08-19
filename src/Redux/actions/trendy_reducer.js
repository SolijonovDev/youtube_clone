import { Videos } from "../../Baza/Videos";

const TR_GET_VIDEOS="TR_GET_VIDEOS"

const getVideos=(videos)=>({
    type:TR_GET_VIDEOS,videos
})

export const trGetVideos=()=>(dispatch)=>{
 dispatch(getVideos(Videos()));
}