function createStore(initState,reducer){
    let state = initState
    let subscribers = []
    const subscriber = (fn) => {
        subscribers.push(fn)
    }
    const dispatch = (action) =>{
        state = reducer(state,action)
        subscribers.forEach(fn => fn())
    }
    const getState = () =>{
        return state
    }
    return {
        subscriber,
        dispatch,
        getState
    }
}
const reducer = function (state,action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count:state.count + 1
            }
        case 'MINUS':{
            return {
                ...state,
                count:state.count - 1
            }
        }
    }
}
const store = createStore({count:1},reducer)
store.subscriber(()=>{
    const state = store.getState()
    console.log(state.count)
})
store.dispatch({type:'ADD'})
