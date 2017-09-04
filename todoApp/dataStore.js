const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})


const store = createStore(todoApp);