import { Videos } from "../../Baza/Videos";

const TR_GET_VIDEOS="TR_GET_VIDEOS";

const initialState = {
    videoplay:null,
    videos: [
        {
            id: 1,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
       
    ]
}


const trendyReducer = (state = initialState, action) => {
    switch (action.type) {
        case TR_GET_VIDEOS:
            return {...state,videos:action.videos}
    default:
        return state;
}
}
export default trendyReducer;

const getVideos=(videos)=>({
    type:TR_GET_VIDEOS,videos
})

export const trGetVideos=()=>(dispatch)=>{
 dispatch(getVideos(Videos()));
}