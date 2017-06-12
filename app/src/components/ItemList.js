import React, {Component, PropTypes} from 'react'
import bean from '../del.png'
import classnames from 'classnames'


export default class ItemList extends Component{
    static propTypes = {
        todo: PropTypes.object.isRequired,
        completeTodo: PropTypes.func.isRequired
    }
    handleCompleteClick = () => {
        this.props.completeTodo(this.props.todo.id);
    }
    render ()  {
        const {todo} = this.props;
        return (
            <div>
                <input
                    className="item-check"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={this.handleCompleteClick}
                />
                <p className={classnames({completed:todo.completed})}>{todo.text}</p>
                <span className={classnames({completed:todo.completed})}>Total time is </span>
                <span className={classnames({completed:todo.completed})}>00:00:00</span>
                <button
                    style={{margin:'10px'}}
                >
                    {(todo.completed === false) ? 'Start' : 'Stop'}
                </button>

                <div className="item-close" onClick={this.delClick}>
                    <img src={bean} alt="" />
                </div>
            </div>
        )
    }
}





//
// import React, {Component, PropTypes} from 'react'
// import bean from '../del.png'
// import classnames from 'classnames'
//
//
// export default class ItemList extends Component{
//     static propTypes = {
//         todo: PropTypes.object.isRequired,
//         completeTodo: PropTypes.func.isRequired
//     }
//     handleCompleteClick = () => {
//         this.props.completeTodo(this.props.todo.id);
//     }
//     // getInitialState: function() {
//     //     return {
//     //         del : false
//     //     };
//     // }
//     // delClick: function(e) {
//     //     e.preventDefault();
//     //     console.log(this.state.del);
//     //     (this.state.del === false) ? this.setState({del: true}): this.setState({del: false})
//     // }
//     render ()  {
//         const {todo} = this.props;
//         return (
//             <div>
//                 <input
//                     className="item-check"
//                     type="checkbox"
//                     checked={todo.completed}
//                     onChange={this.handleCompleteClick}
//                 />
//                 <p className={(this.state.del == false) ? 'item-name' : 'item-name deleted'}>{data}</p>
//                 <span className={(this.state.del == false) ? '' : 'deleted'}>Total time is </span>
//                 <span className={(this.state.del == false) ? '' : 'deleted'}>00:00:00</span>
//                 <button
//                     style={{margin:'10px'}}
//                 >
//                     {(todo.completed === false) ? 'Start' : 'Stop'}
//                 </button>
//
//                 <div className="item-close" onClick={this.delClick}>
//                     <img src={bean} alt="" />
//                 </div>
//             </div>
//         )
//     }
// })
//
//
// export default ItemList;