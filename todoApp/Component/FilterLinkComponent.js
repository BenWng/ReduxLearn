class FilterLink extends Component{


    render(){

        const {filter,
            currentFilter,
            onClick,
            children,
        }=this.props;


        if (filter === currentFilter) {
            return <span>{children}</span>
        }

        return (
            <a href='#'
               onClick={e => {
                   e.preventDefault();
                   onClick(filter);
               }}>
                {children}
            </a>
        );
    }
};

