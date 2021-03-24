const SET_VIDEOS='SET_VIDEOS';
const VIDEO_PLAY='VIDEO_PLAY';
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
        {
            id: 2,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
    ]
}


const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return { ...state,videos:[...action.videos] }
    
    case VIDEO_PLAY:
        return {...state,videoplay:{...action.video} } 
    default:
        return state;
}
}
export default videosReducer;
export const setVideoPlay=(video)=>({type:VIDEO_PLAY,video});
export const setVideos=(videos)=> ({type:SET_VIDEOS, videos})