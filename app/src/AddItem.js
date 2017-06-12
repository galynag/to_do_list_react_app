import React from 'react';





var AddItem = React.createClass({
    getInitialState: function() {
        return {
            valueAddItem : ''
        };
    },
    valueChange: function(e) {
        e.preventDefault();
        console.log(this.state.del);
        (this.state.del === false) ? this.setState({del: true}): this.setState({del: false})
    },

    render : function() {
        return (
            <input id="addItem" type="text" placeholder="What should be done?" value={this.state.valueAddItem}/>
        )
    }
})


export default AddItem;