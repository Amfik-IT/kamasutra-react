// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

let initialState = {
    users: [
        // {id: 1, photoUpl: 'https://bit.ly/3waIwov', followed: false, fullName: "Dmitry", status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 2, photoUpl: 'https://bit.ly/3waIwov', followed: true, fullName: "Vova", status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, photoUpl: 'https://bit.ly/3waIwov', followed: false, fullName: "Sasha", status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 4, photoUpl: 'https://bit.ly/3waIwov', followed: true, fullName: "Vanya", status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
    ],
};

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        // case FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
        //     };
        //
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
        //     };
        case SET_USERS:
            return {...state, users:[...state.users, ...action.users]}

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !action.friendStatus} : u)
            }

        default:
            return state;
    }
}

// export const followAC = (userId) => ({type: FOLLOW, userId})
// export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const toggleFollowAC = (userId, friendStatus) => ({type: TOGGLE_FOLLOW, userId, friendStatus})

export default UsersReducer;