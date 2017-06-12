import React from 'react';
import bean from './del.png';


var ItemList = React.createClass({
    getInitialState: function() {
        return {
            del : false
        };
    },
    delClick: function(e) {
        e.preventDefault();
        console.log(this.state.del);
        (this.state.del === false) ? this.setState({del: true}): this.setState({del: false})
    },
    render : function()  {
        var data=this.props.data;
        return (
            <div>
                <input className="item-check" type="checkbox" />
                <p className={(this.state.del == false) ? 'item-name' : 'item-name deleted'}>{data}</p>
                <span className={(this.state.del == false) ? '' : 'deleted'}>Total time is </span>
                <span className={(this.state.del == false) ? '' : 'deleted'}>00:00:00</span>
                <button
                    style={{margin:'10px'}}
                >
                    {(this.state.del == false) ? 'Start' : 'Stop'}
                </button>

                <div className="item-close" onClick={this.delClick}>
                    <img src={bean} alt="" />
                </div>
            </div>
        )
    }
})


export default ItemList;