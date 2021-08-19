import { Videos } from "../../Baza/Videos";

const PS_GET_VIDEOS="PS_GET_VIDEOS"

const psGetVideo=(videos)=>({
    type:PS_GET_VIDEOS,videos
})

export const psGetVideoThunk=()=>(dispatch)=>{
   dispatch(psGetVideo(Videos()));
}