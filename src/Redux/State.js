// let renderEntireTree = () => {
//     console.log('State changed')
// }
//
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi? how are you", likeCount: 15, likeIcon: "&#9829;"},
//             {id: 1, message: "It's my firs post", likeCount: 20, likeIcon: "&#9829;"},
//         ],
//         newPostText: 'Новый пост',
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Vova", avatar: 'https://bit.ly/3waIwov'},
//             {id: 2, name: "Dimych", avatar: 'https://bit.ly/3waIwov'},
//             {id: 3, name: "Slava", avatar: 'https://bit.ly/3waIwov'},
//             {id: 4, name: "Ilia", avatar: 'https://bit.ly/3waIwov'},
//             {id: 5, name: "Andrey", avatar: 'https://bit.ly/3waIwov'},
//             {id: 6, name: "Sasha", avatar: 'https://bit.ly/3waIwov'},
//         ],
//         messages: [
//             {id: 1, message: "Hi!", avatar: 'https://bit.ly/3waIwov', author: 'me'},
//             {id: 2, message: "How is your it-kamasutra?", avatar: 'https://bit.ly/3waIwov', author: 'collocutor'},
//             {id: 3, message: "I am fine =)", avatar: 'https://bit.ly/3waIwov', author: 'me'},
//             {id: 4, message: "Nice ;)", avatar: 'https://bit.ly/3waIwov', author: 'collocutor'},
//             {id: 5, message: "Yo ;)", avatar: 'https://bit.ly/3waIwov', author: 'me'},
//         ],
//         newMessagesText: 'Новое сообщение',
//     },
//     sidebar: {
//         friends: [
//             {id: 1, name: "Dimych", avatar: 'https://bit.ly/3waIwov'},
//             {id: 2, name: "Slava", avatar: 'https://bit.ly/3waIwov'},
//             {id: 3, name: "Andrey", avatar: 'https://bit.ly/3waIwov'},
//             {id: 4, name: "Sasha", avatar: 'https://bit.ly/3waIwov'},
//             {id: 5, name: "Dima", avatar: 'https://bit.ly/3waIwov'},
//         ]
//     },
// }
//
// // ADD POST
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likeCount: 0,
//         likeIcon: "&#9829;",
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     renderEntireTree(state);
// }
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     renderEntireTree(state);
// }
//
// // ADD MESSAGE
//
// export const addMessage = () => {
//     let newMessage = {
//         id: 5,
//         message: state.dialogsPage.newMessagesText,
//         avatar: 'https://bit.ly/3waIwov',
//         author: 'me',
//     };
//     // debugger
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessagesText = '';
//     renderEntireTree(state);
// }
//
// export const updateNewMessageText = (newMessage) => {
//     state.dialogsPage.newMessagesText = newMessage;
//     renderEntireTree(state);
// }
//
//
// // LISTENER STATE
//
// export const subscribe = (observer) => {
//     renderEntireTree = observer; // паттерн "observer" - наблюдатель
// }

// export default state;

let store = {
    _callSubscriber() {
        console.log('No subscribers (observers)')
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi? how are you", likeCount: 15, likeIcon: "&#9829;"},
                {id: 1, message: "It's my firs post", likeCount: 20, likeIcon: "&#9829;"},
            ],
            newPostText: 'Новый пост',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Vova", avatar: 'https://bit.ly/3waIwov'},
                {id: 2, name: "Dimych", avatar: 'https://bit.ly/3waIwov'},
                {id: 3, name: "Slava", avatar: 'https://bit.ly/3waIwov'},
                {id: 4, name: "Ilia", avatar: 'https://bit.ly/3waIwov'},
                {id: 5, name: "Andrey", avatar: 'https://bit.ly/3waIwov'},
                {id: 6, name: "Sasha", avatar: 'https://bit.ly/3waIwov'},
            ],
            messages: [
                {id: 1, message: "Hi!", avatar: 'https://bit.ly/3waIwov', author: 'me'},
                {id: 2, message: "How is your it-kamasutra?", avatar: 'https://bit.ly/3waIwov', author: 'collocutor'},
                {id: 3, message: "I am fine =)", avatar: 'https://bit.ly/3waIwov', author: 'me'},
                {id: 4, message: "Nice ;)", avatar: 'https://bit.ly/3waIwov', author: 'collocutor'},
                {id: 5, message: "Yo ;)", avatar: 'https://bit.ly/3waIwov', author: 'me'},
            ],
            newMessagesText: 'Новое сообщение',
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dimych", avatar: 'https://bit.ly/3waIwov'},
                {id: 2, name: "Slava", avatar: 'https://bit.ly/3waIwov'},
                {id: 3, name: "Andrey", avatar: 'https://bit.ly/3waIwov'},
                {id: 4, name: "Sasha", avatar: 'https://bit.ly/3waIwov'},
                {id: 5, name: "Dima", avatar: 'https://bit.ly/3waIwov'},
            ]
        },
    },

    getState() {
        return this._state;
    },

    // LISTENER STATE

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // ADD POST

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
            likeIcon: "&#9829;",
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    // ADD MESSAGE

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessagesText,
            avatar: 'https://bit.ly/3waIwov',
            author: 'me',
        };
        // debugger
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessagesText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessagesText = newMessage;
        this._callSubscriber(this._state);
    },
}

export default store;