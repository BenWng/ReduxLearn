const TodoApp = ()=>
    (<div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer />
    </div>);



const render = () => {
    ReactDOM.render(
        <TodoApp/>,
        document.getElementById('root')
    );
};

render();