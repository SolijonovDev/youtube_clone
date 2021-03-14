const SET_VIDEOS='SET_VIDEOS';

const initialState = {
    videos: [
        
    ]
}


const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return { ...state,videos:[...action.videos] }
    }
    return state;
}

export default videoReducer;

export const setVideos=(videos)=> ({type:SET_VIDEOS, videos})