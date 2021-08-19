import { getVideoById, Videos } from "../../Baza/Videos";

const SET_VIDEO='SET_VIDEO';
const W_GET_VIDEO='W_GET_VIDEO';
const VIDEO_PLAY='VIDEO_PLAY';

export const setVideoPlay=(video)=>({type:VIDEO_PLAY,video});

export const setVideo=(video)=> ({type:SET_VIDEO, video})

const getVideo=(videos)=> ({type:W_GET_VIDEO, videos})

export const watchVideoThunk=(id)=>(dispatch)=>{
    dispatch(setVideo(getVideoById(id)));
}
export const watchGetVideosThunk=()=>(dispatch)=>{
    dispatch(getVideo(Videos()));
}