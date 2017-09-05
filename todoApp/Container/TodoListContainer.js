class TodoListContainer extends Component{


    componentDidMount(){
        this.unsubsribe=store.subscribe(()=>{
            this.forceUpdate();
        });
    }

    componentWillUnmount(){
        this.unsubsribe();
    }

    render()
    {
        const {todos, visibilityFilter} = store.getState();
        return (<TodoList
            todos={getVisibleTodos(
                todos,
                visibilityFilter
            )}
            onTodoClick={id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                })
            }
        />)
    }
}