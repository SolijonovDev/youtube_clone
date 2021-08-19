import { Videos } from "../../Baza/Videos";

const PS_GET_VIDEOS="PS_GET_VIDEOS";
const initialState = {
    videoplay:null,
    videos: [
        {
            id: 1,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        }
    ]
}


const podpiskaReducer = (state = initialState, action) => {
    switch (action.type) {
        case PS_GET_VIDEOS:
            return {...state,videos:action.videos}
    default:
        return state;
}
}
export default podpiskaReducer;
const psGetVideo=(videos)=>({
    type:PS_GET_VIDEOS,videos
})
export const psGetVideoThunk=()=>(dispatch)=>{
   dispatch(psGetVideo(Videos()));
}