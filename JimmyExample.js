const HelloWorld = () => {
    return (<div>Hello World!</div>);
}

const App = () => {
    return(
        <HelloWorld />
    );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
