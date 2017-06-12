import React, { PropTypes, Component } from 'react'
import AddItem from './AddItem'


export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleSave = text => {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

    render() {
        return (
            <header className="my-header">
                <h1>Create your plans</h1>
                <AddItem newTodo
                               onSave={this.handleSave}
                               placeholder="What should be done?" />
            </header>
        )
    }
}