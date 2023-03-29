const data = ['Avo', 'Anna', 'Vahag', 'Gor', 'Margarita', 'Kamo'];

const initialState = { count: 0, text: "", filtered: data , lists:['Abraham', 'Aharon', 'Bella', 'Jonh', 'Eliza'], 
filterLis:[], inputVal:""};


function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case "INCREMENT_COUNT":
            return { ...state, count: state.count + 1 }

        case "DECREMENT_COUNT":
            return { ...state, count: state.count - 1 }

        case "CHANGE_TEXT":
            return { ...state, text: action.payload }

        case "SEARCH":
            const filtered =data.filter((item) => {
                return item.includes(action.payload)
            })
            return { ...state, filtered }
            case "SEARCH_TEXT":
            const filtereed = state.list.filter((item)=>item.toLowerCase().includes(action.payload))
            return {...state, inputVal: action.payload, filterLis:filtereed}
            
        default:
            return state;
    }
}

// [ { id: 1, name: “first to do” } ]

export default reducer