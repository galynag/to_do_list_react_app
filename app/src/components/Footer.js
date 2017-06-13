import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    static propTypes = {
        clearCompleted: PropTypes.func.isRequired
    }

    clearCompletedF= () => {
       this.props.clearCompleted();
    }


    render() {


        return (
            <footer className="footer">
                <button
                onClick={this.clearCompletedF}
                >
                    Clear all completed tasks
                </button>
            </footer>
        )
    }
}
