import { Videos } from "../../Baza/Videos";
const AS_SET_VIDEOS="AS_SET_VIDEOS";

const initialState = {
    videoplay:null,
     videos: [   {
        id:7,
        channelName:"Glo academy",
        status:"",
        views:"110 korish",
        layk:0,
        dislayk:0,
        src:"",
        photochannel:"",
    }],
}


const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case AS_SET_VIDEOS:
            return {...state,videos:action.videos}
    default:
        return state;
}
}
export default videosReducer;

const asSetVideos=(videos)=>({
    type:AS_SET_VIDEOS,videos
})
 
export const videosThunk=()=>(dispatch)=>{
  dispatch(asSetVideos(Videos()))
}