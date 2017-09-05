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
        <TodoListContainer/>
        <Footer />
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