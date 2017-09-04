


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

        if (filter === visibilityFilter) {
            return <span>{children}</span>
        }

        return (
            <a href='#'
               onClick={e => {
                   e.preventDefault();
                   store.dispatch({
                       type: 'SET_VISIBILITY_FILTER',
                       filter : filter
                   })
               }}>
                {children}
            </a>
        );
    }
};

