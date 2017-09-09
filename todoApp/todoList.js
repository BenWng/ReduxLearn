const TodoApp = ()=>
    (<div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer />
    </div>);



// class Provider extends Component {
//     getChildContext() {
//         return {
//           store: this.props.store
//         };
//     }
//
//     render() {
//         return this.props.children;
//     }
//
// }





// Provider.childContextTypes = {
//   store: React.PropTypes.object
// };



const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})


const render = () => {
    ReactDOM.render(
      <Provider store={createStore(todoApp)}>
        <TodoApp/>
      </Provider>,
        document.getElementById('root')
    );
};

render();