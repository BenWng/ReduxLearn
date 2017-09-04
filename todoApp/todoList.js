const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})


const store = createStore(todoApp);



const getVisibleTodos = (
    todos,
    filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t=> t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t=> !t.completed
            );
    }
}




let nextTodoId = 0 ;
const TodoApp = ({todos, visibilityFilter})=>
    (<div>
        <AddTodo
            onAddClick= {
                text=>store.dispatch({
                    type: 'ADD_TODO',
                    text: text,
                    id: nextTodoId++
            })}
        />
        <TodoList
            todos={getVisibleTodos(
                todos,
                visibilityFilter
            )}
            onTodoClick={id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id:id
                })
            }
        />
        <Footer
            visibilityFilter = {visibilityFilter}
            onFilterClick ={
                filter => {
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter : filter
                    })
                }
            }
        />
    </div>);



const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();