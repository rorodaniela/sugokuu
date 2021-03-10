import encodeParams from '../../helpers/encodeBoard'

export const fetchBoard = (level) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://sugoku.herokuapp.com/board?difficulty=${level}`,
                { method: "GET" }
            );
            const data = await response.json();
            dispatch({
                type: "BOARD/FETCH",
                payload: data.board,
            });
        } catch (error) {
            console.log(error);   
        }
        
    };
};

export const updateBoard = (payload) => {
    return {
        type: 'BOARD/UPDATE',
        payload
    }
}

export const insertPlayer = (payload) => {
    return {
        type: "PLAYER/ADD",
        payload,
    };
};

export const fetchValidate = () => {
    try {
        return async (dispatch, getState) => {
            const board = getState().newBoard;
            console.log(board, "<<< newboard");
            const response = await fetch(
                "https://sugoku.herokuapp.com/validate",
                {
                    method: "POST",
                    body: encodeParams({board}),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const data = await response.json()
            dispatch({
                type: "STATUS/CHANGE",
                payload: data.status
            })
        }   
    } catch (error) {
        console.log(error, "<<< error");
    }
    
}

export const fetchSolve = () => {
    try {
        return async (dispatch, getState) => {
            const board = getState().board;
            const response = await fetch(
                "https://sugoku.herokuapp.com/solve",
                {
                    method: "POST",
                    body: encodeParams({ board }), 
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({
                    type: "BOARD/SOLVED",
                    payload: data.solution,
                });
            }
        };
    } catch (error) {
        console.log(error, "<<< error");
    }
};
