// class FilterLink extends Component{
//     componentDidMount(){
//         const {store} = this.context;
//         this.unsubsribe=store.subscribe(()=>{
//             this.forceUpdate();
//         });
//     }
//
//     componentWillUnmount(){
//         this.unsubsribe();
//     }
//
//
//
//     render(){
//
//         const {store} = this.context;
//         const {visibilityFilter} = store.getState();
//         const {filter, children}=this.props;
//
//         return (<Link
//             active = {filter=== visibilityFilter }
//             children={children}
//             onClick={() => {
//                 store.dispatch({
//                     type: 'SET_VISIBILITY_FILTER',
//                     filter : filter
//                 })
//             }}
//         />)
//
//     }
// };
//
// FilterLink.contextTypes = {
//     store: React.PropTypes.object
// }


const mapStateToProps = (state, ownProps) => {
    return {
        active: ()=>{ return ownProps.filter === state.visibilityFilter; }
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch( {type: 'SET_VISIBILITY_FILTER',
                filter : ownProps.filter
            });
        }
    }
}


const FilterLink = connect (mapStateToProps, mapDispatchToProps);