const initialState={
videos: [
    {
        id: 1,
        photo:'',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU',
        name: 'Vladilen Minen',
        status: 'html za 1 chas',
    },
    {
        id: 2,
        photo:'',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU',
        name: 'Vladilen Minen',
        status: 'html za 1 chas',
    },
    {
        id: 3,
        photo:'',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU',
        name: 'Vladilen Minen',
        status: 'html za 1 chas',
    },
    {
        id: 4,
        photo:'',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshD0QewANeDX0TFmf_a8YOF1ggE2J1IhGHA&usqp=CAU',
        name: 'Vladilen Minen',
        status: 'html za 1 chas',
    }
]
}


const subsReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default subsReducer;