import React, {Component, PropTypes} from 'react'


export default class AddItem extends Component {
    static proTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        plaseholder: PropTypes.string,
        newTodo: PropTypes.bool
    }
    state = {
        text: this.props.text || ''
    }
    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({text: ''})
            }
        }
    }
    handleChange = e => {
        this.setState({ text: e.target.value})
    }
    handleBlur = e => {
        if (!this.newTodo) {
            this.props.onSave(e.target.value)
        }
    }
    render() {
        return (
            <input
                id="addItem"
                type="text"
                placeholder={this.props.placeholder}
                autoFocus="true"
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit} />


        )
    }
}




//
//
// var AddItem = React.createClass({
//     getInitialState: function() {
//         return {
//             valueAddItem : ''
//         };
//     },
//     valueChange: function(e) {
//         e.preventDefault();
//         console.log(this.state.del);
//         (this.state.del === false) ? this.setState({del: true}): this.setState({del: false})
//     },
//
//     render : function() {
//         return (
//             <input
//                 id="addItem"
//                 type="text"
//                 placeholder="What should be done?"
//                 value={this.state.valueAddItem}/>
//         )
//     }
// })
//
//
// export default AddItem;