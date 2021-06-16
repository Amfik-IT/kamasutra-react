const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi? how are you", likeCount: 15, likeIcon: "&#9829;"},
        {id: 2, message: "It's my firs post", likeCount: 20, likeIcon: "&#9829;"},
    ],
    newPostText: 'Новый пост',
};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let maxId = Math.max(...state.posts.map(i => i.id));
            let newPost = {
                id: maxId + 1,
                message: state.newPostText,
                likeCount: 0,
                likeIcon: "&#9829;",
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})

export default ProfileReducer;