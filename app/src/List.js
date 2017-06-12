import React from 'react';
import ItemList from './ItemList.js';


var List = React.createClass ({
    render : function () {
        var data=this.props.data;
        var itemTemplates;
        itemTemplates = data.map(function(item,index){
            return (
                <div key={index} className="item-list">
                    <ItemList data={item}/>
                </div>
            )
        });
        return (
            <div className="list-box">
                {itemTemplates}
                <p style={{padding: '10px'}}>{data.length} items</p>
            </div>
        )
    }
});

export default List;