
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
    ]
}


const videosReducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
}
}
export default videosReducer;