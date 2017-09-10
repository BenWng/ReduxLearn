let nextTodoId = 0 ;


const AddTodoAction = (text) => {
    return ({
        type: 'ADD_TODO',
        text: text,
        id: nextTodoId++
    })
}