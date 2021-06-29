import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search.component';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters: [],
       searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(users => console.log(users))
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState( { searchField: e.target.value })
   };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App" >
        <h1>Monster's Rollodex</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange = {this.handleChange}
        />
        <CardList monsters= {filteredMonsters} />
      </div>
    )
  }
}