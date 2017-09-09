let nextTodoId = 0 ;


let AddTodo = ({dispatch}) =>{
    let input;
    return(
        <div>
            <input ref={node => {
                input = node;
            }}/>
            <button onClick={ ()=>{
                dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextTodoId++
                });
                input.value='';
            }}>
                Add Todo
            </button>
        </div>
    );
}


AddTodo = connect()(AddTodo);


// AddTodo.contextTypes = {
//     store: React.PropTypes.object
// }