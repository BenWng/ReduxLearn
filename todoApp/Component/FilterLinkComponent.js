const Link=({active, children, onClick})=>{
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href='#'
           onClick={onClick}>
            {children}
        </a>
    );

};


class FilterLink extends Component{
    componentDidMount(){
        this.unsubsribe=store.subscribe(()=>{
            this.forceUpdate();
        });
    }

    componentWillUnmount(){
        this.unsubsribe();
    }



    render(){

        const {visibilityFilter} = store.getState();
        const {filter, children}=this.props;

        return (<Link
                    active = {filter=== visibilityFilter }
                    children={children}
                    onClick={e => {
                            e.preventDefault();
                            store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter : filter
                        })
                    }}
                />)

    }
};

