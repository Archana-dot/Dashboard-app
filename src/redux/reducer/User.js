const initialState = {
    user :[]
}

const user = (state = initialState, action) => {
    
    switch (action.type) {
        case 'UPDATE_USER_DETAILS' :
            return {
                ...state,user:action.payload
            }
        default:
            return state;
    }
};

export default user;