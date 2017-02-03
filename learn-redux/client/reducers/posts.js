// a reducer takes in 2 things
// 1. takes action ( info about what happened )
// 2. copy of current state

function posts(state = [], action) {

    switch(action.type) {
        case 'INCREMENT_LIKES' :
        console.log("incrementing likes!");
        const i = action.index;
        return [
            ...state.slice(0,i), //before the one we're updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), //everything after the one we're updating
        ];
        // return default state
        default :
        return state;
    }
    return state;
}

export default posts;

