const SET_VIDEOS='SET_VIDEOS';
const VIDEO_PLAY='VIDEO_PLAY';

const initialState = {
    videoplay:null,
    video: {
        id: 1,
        channelName:"Vladilen Minen",
        status: 'React za 1 chas',
        views:"110 000 korish",
        layk:"10 000",
        dislayk:"100",
        src: "",
        photochannel:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU",
    },
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
        {
            id: 2,
            channelName:"Anna Blok",
            status: 'Izuchaem Grid Css',
            views:"15 000 korish",
            layk:"1 000",
            dislayk:"100",
            src:"",
            photochannel:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU",
        },
        {
            id: 3,
            channelName:"Glo Academy",
            status: 'Jonli efir',
            views:"4 000 korish",
            layk:"500",
            dislayk:"5",
            src: "",
            photochannel:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU",
        },
        {
            id: 4,
            channelName:"It-kamasutra",
            status: 'React js put samuraya',
            views:"110 000 korish",
            layk:"25 000",
            dislayk:"100",
            src: "",
            photochannel:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU",
        },
        {
            id: 5,
            channelName:"Frilancer po jizni",
            status: 'Izuchaem javascript',
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
        case SET_VIDEOS:
            return { ...state,videos:[...action.videos] }
    
    case VIDEO_PLAY:
        return {...state,videoplay:{...action.video} } 
    default:
        return state;
}
}
export default watchVideosReducer;
export const setVideoPlay=(video)=>({type:VIDEO_PLAY,video});
export const setVideos=(videos)=> ({type:SET_VIDEOS, videos})