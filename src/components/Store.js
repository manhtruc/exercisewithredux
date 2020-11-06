var redux = require('redux')


const nameGame = {
    name: [
        // {
        //     "id": 1,
        //     "name": "Default",
        //     "class": "default",
        //     "edit": false
        // },
        // {
        //     "id": 2,
        //     "name": "Game",
        //     "class": "game"
        // },
        // {
        //     "id": 3,
        //     "name": "Movie",
        //     "class": "movie"
        // },
        // {
        //     "id": 4,
        //     "name": "Music",
        //     "class": "music"
        // },
        // {
        //     "id": 5,
        //     "name": "Custom 1",
        //     "class": "default"
        // },
        // {
        //     "id": 6,
        //     "name": "demo long text demo long text demo",
        //     "class": "default"
        // }
        {
            id: 1,
            name: "Default",
            class: "default",
            edit: false
        },
        {
            id: 2,
            name: "Game",
            class: "game"
        },
        {
            id: 3,
            name: "Movie",
            class: "movie"
        },
        {
            id: 4,
            name: "Music",
            class: "music"
        },
        {
            id: 5,
            name: "Custom 1",
            class: "default"
        },
        {
            id: 6,
            name: "demo long text demo long text demo",
            class: "default"
        }
    ]
}

// const nameInitialState = [
//     {
//         id: 1,
//         name: "Default",
//         class: "default",
//         edit: false
//     },
//     {
//         id: 2,
//         name: "Game",
//         class: "game"
//     },
//     {
//         id: 3,
//         name: "Movie",
//         class: "movie"
//     },
//     {
//         id: 4,
//         name: "Music",
//         class: "music"
//     },
//     {
//         id: 5,
//         name: "Custom 1",
//         class: "default"
//     },
//     {
//         id: 6,
//         name: "demo long text demo long text demo",
//         class: "default"
//     }
// ]
const nameReducer = (state = nameGame, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return state.name.push(
                {
                    name: "New Profile",
                    class: "default"
                }
            )

        default:
            return state
    }
}


var store1 = redux.createStore(nameReducer);
store1.dispatch({
    type: "ADD_ITEM"
})

console.log(store1.getState())
export default store1;