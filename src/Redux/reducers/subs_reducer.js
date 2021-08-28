import { Videos } from "../../Baza/Videos";

const SUBS_GET_VIDEOS="SUBS_GET_VIDEOS";
const initialState={
videos: [
    {
        id: 1,
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH43inX9bN4B2cxeler3UcL8kbVp8m3FNyxg&usqp=CAU',
        name: 'Vladilen Minen',
        status: 'html za 1 chas',
    }
]
}

const subsReducer=(state=initialState,action)=>{
    switch(action.type){
        case SUBS_GET_VIDEOS:
            return {...state,videos:action.videos}
        default:
            return state;
    }
}

export default subsReducer;

const subsGetVideo=(videos)=>({
    type:SUBS_GET_VIDEOS,videos,
})
export const subsGetVideoThunk=()=>(dispatch)=>{
    dispatch(subsGetVideo(Videos()))
}