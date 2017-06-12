import React, { Component, PropTypes } from 'react'
import ItemList from "./ItemList";

export default class MainSection extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
    }

    render() {
        const { todos, actions } = this.props;
        console.log(actions);
        return (
            <div className="list-box">
                <h1>Create your plans</h1>
                    {todos.map(todo =>
                        <ItemList key={todo.id} todo={todo} {...actions}/>
                    )}
            </div>

        )
    }
}

