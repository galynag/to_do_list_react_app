import React from 'react';
import AddItem from './AddItem.js';
import List from './List.js';

var toDoList = ['task1','task2','task3','task4'];


//class App extends Component  синтаксис ES6 === var App = React.createClass (ES5)



var App = React.createClass({
    render : function() {
        return (
            <div>
                <h1>Create your plans</h1>
                <AddItem />
                <List data={toDoList} />
            </div>
        )
    }
})

export default App;
