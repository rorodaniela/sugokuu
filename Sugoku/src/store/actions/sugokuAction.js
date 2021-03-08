export const fetchBoard = () => {
    return async (dispatch) => {
        const response = await fetch("https://sugoku.herokuapp.com/board?difficulty=easy",{method: "GET"});
        const data = await response.json();
        if (data) {
            dispatch({
                type: "BOARD/FETCH",
                payload: data
            });
        }
    };
};

export const updateBoard = (payload) => {
    return {
        type: 'BOARD/UPDATE',
        payload
    }
}

export const fetchValidate = (payload) => {
    return async (dispatch) => {
        const response = await fetch("", {
            method: "POST",
            data: encodeParams({ board: payload }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        const data = await response.json()
    }
}
