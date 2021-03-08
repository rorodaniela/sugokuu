const initialState = {
    board: []
};

const sudokuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOARD/FETCH":
            return { ...state, board: action.payload };
        case "BOARD/UPDATE":
            return { ...state, board: action.payload };
        default:
            return state;
    }
}

export default sudokuReducer