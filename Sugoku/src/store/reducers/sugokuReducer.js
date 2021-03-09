const initialState = {
    board: [],
    newBoard: [],
    status: '',
    player: []
};

const sudokuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOARD/FETCH":
            return { ...state, board: action.payload, newBoard: action.payload };
        case "BOARD/UPDATE":
            return { ...state, newBoard: action.payload };
        case "STATUS/CHANGE":
            return { ...state, status: action.payload };
        case "BOARD/SOLVED":
            return { ...state, board: action.payload, newBoard: action.payload};
        case "PLAYER/ADD":
            return {...state, player: state.player.concat(action.payload)}
        default:
            return state;
    }
}

export default sudokuReducer