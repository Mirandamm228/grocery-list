import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      foodItem: '',
      groceryList: []
    }
    
  }
   
  

  onAddItem(){
    this.setState({
      groceryList : [...this.state.groceryList, this.state.foodItem],
      foodItem: ''
    });
    console.log("Item added");
  }

  onDeleteItem(){
    this.setState({
      groceryList: this.state.groceryList.filter(item => item !== item)
    });
    console.log("Item Deleted: " );
  }

  onListCleared(){
    this.setState({
      groceryList: []
    });
    console.log("List cleared")
  }

  render() {

    return (
      <div className="App">
        <div id="listContainer">
          <h1><u>Your Grocery List!</u></h1>
          <ul id="list">
              {
                this.state.groceryList.map((item, index) => (<li className='food' key={index}>{item} 
                <button className='del btn btn-danger btn-sm ml-3' 
                onClick={ this.onDeleteItem.bind(this)}>Delete</button>
                </li>))
              }
          </ul>

          <form className="form-group">
              <label type="text">Add an item:
                <input id="input" 
                className="form-control" type="text" value={this.state.foodItem}
                onChange={event => this.setState({foodItem: event.target.value})}/>
              </label>
          </form>

          <button id="addFood" className="btn btn-success" 
          onClick={this.onAddItem.bind(this)} 
          >Add to list!</button> <br /> <br />
          <button id="reset" className="btn btn-warning" onClick={this.onListCleared.bind(this)}>Clear List</button>

          <p>Welcome to Your Grocery List! If you want to add an item,
              just type it in and click the button 'Add to list!'
              (or just press the enter key). Add as much as you like.
              If you made a mistake, you can remove the item from the
              list by clicking the 'delete' button that is next to the item.
              You can cross off items by clicking on the item once and
              uncross by clicking twice. If you want to reset the whole
              list, just click the 'Clear List' button. Enjoy!</p>
        </div>
      </div>
    );
  }
}

export default App;
