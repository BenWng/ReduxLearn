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


const mapStateToProps = state => {
    return {
        todos: getVisibleTodos( state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(TodoListAction(id))
        }
    };
};

const VisibleTodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


// class VisibleTodoList extends Component{
//
//
//     componentDidMount(){
//         const {store} = this.context;
//         this.unsubsribe=store.subscribe(()=>{
//             this.forceUpdate();
//         });
//     }
//
//     componentWillUnmount(){
//         this.unsubsribe();
//     }
//
//     render()
//     {
//         const {store} = this.context;
//         const {todos, visibilityFilter} = store.getState();
//         return (<TodoList
//             todos={getVisibleTodos(
//                 todos,
//                 visibilityFilter
//             )}
//             onTodoClick={id =>
//                 store.dispatch({
//                     type: 'TOGGLE_TODO',
//                     id: id
//                 })
//             }
//         />)
//     }
// }
//
// VisibleTodoList.contextTypes = {
//     store: React.PropTypes.object
// }