import { getVideoById, Videos } from "../Baza/Videos";

const SET_VIDEO='SET_VIDEO';
const W_GET_VIDEO='W_GET_VIDEO';
const VIDEO_PLAY='VIDEO_PLAY';

const initialState = {
    videoplay:null,
    video:{ id: 1, 
        channelName:"Vladilen Minen",
        status: 'Kak uchitsya programirovanie',
        views:"110 000 korish",
        layk:"10 000",
        dislayk:"100",
        src: "https://www.youtube.com/embed/watch?v=7gf9g3p4quM&list=PLqKQF2ojwm3mfyutH5pb0BCIjb32GZSlP&index=3",
        photochannel:"https://data:image/jpeg;base64,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encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU",} ,
    videos: [
        {
            id: 1,
            channelName:"Vladilen Minen",
            status: 'React za 1 chas',
            views:"110 000 korish",
            layk:"10 000",
            dislayk:"100",
            src: "",
            photochannel:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU",
        },
    ]
}


const watchVideosReducer = (state = initialState, action) => {
    switch (action.type) {
        case W_GET_VIDEO:
            return {...state,videos:action.videos}
        case SET_VIDEO:
            return { ...state,video:action.video }
    case VIDEO_PLAY:
        return {...state,videoplay:{...action.video} } 
    default:
        return state;
}
}
export default watchVideosReducer;
export const setVideoPlay=(video)=>({type:VIDEO_PLAY,video});
export const setVideo=(video)=> ({type:SET_VIDEO, video})
const getVideo=(videos)=> ({type:W_GET_VIDEO, videos})

export const watchVideoThunk=(id)=>(dispatch)=>{
    dispatch(setVideo(getVideoById(id)));
}
export const watchGetVideosThunk=()=>(dispatch)=>{
    dispatch(getVideo(Videos()));
}