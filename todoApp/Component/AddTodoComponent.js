

let AddTodo = ({dispatch}) =>{
    let input;
    return(
        <div>
            <input ref={node => {
                input = node;
            }}/>
            <button onClick={ ()=>{
                dispatch(AddTodoAction(input.value));
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