import { Videos } from "../../Baza/Videos";

const AS_SET_VIDEOS="AS_SET_VIDEOS";

const asSetVideos=(videos)=>({
    type:AS_SET_VIDEOS,videos
})
 
export const videosThunk=()=>(dispatch)=>{
  dispatch(asSetVideos(Videos()))
}