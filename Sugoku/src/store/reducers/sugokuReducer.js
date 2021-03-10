const initialState = {
    board: [],
    newBoard: [],
    status: '',
    winner: [],
    start : true,
    loading: true
};

const sudokuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOARD/FETCH":
            return { ...state, board: action.payload, newBoard: action.payload, start: true, loading: false };
        case "BOARD/UPDATE":
            return { ...state, newBoard: action.payload };
        case "STATUS/CHANGE":
            return { ...state, status: action.payload };
        case "BOARD/SOLVED":
            return { ...state, board: action.payload, newBoard: action.payload, start: false};
        case "WINNER/ADD":
            return {...state, winner: state.winner.concat(action.payload)}
        default:
            return state;
    }
}

export default sudokuReducer