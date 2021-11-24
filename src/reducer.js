import { news } from "./services/news";

const initialState = {
    user: null,
    news: news
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ON_LOGIN':
            return onLogin(action.user, state);
        case 'ON_LOGOUT':
            return onLogout(state);
        default:
            return state;
    }
};

const onLogin = (user, state) => {
    return {
        ...state,
        user: user,
    };
};

const onLogout = (state) => {
    return {
        ...state,
        user: null
    };
};

// const onEdit = (editedItem, id, state) => {

//     const { news } = state;

//     const idx = news.findIndex((item) => {
//         return item.id === id;
//     });

//     const editedNews = [
//         news.splice(0, idx),
//         editedItem,
//         news.splice(idx + 1)
//     ];

//     return {
//         ...state,
//         news: editedNews
//     };
// };