import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Header } from 'semantic-ui-react';
import axios from 'axios';

import SongsForm from './components/SongsForm';
import SongsList from './components/SongsList';

class App extends Component {
  state = { todos: [] } // I have some shared components that need to know about this state. Why I'm here.
  // ^^ App is taking care of state for todos
  // we use the arrow funtion when we need to bind the "this" to the React component "this"
  // this is a REact component that exists -- we are overriding some of it -- and we get inheritance

  componentDidMount() {
    axios.get('/api/songs')
     .then( res => this.setState({ songs: res.data }) )
  }

  addSong =(name) => {
    let song = {name}
    axios.post('/api/songs', song)
      .then( res => {
          const { songs } = this.state;
          this.setState({ songs: [...songs, res.data] })
      })
  }

  updateSong = (id) => {
    axios.put(`/api/songs/${id}`)
      .then( res => {
        const songs = this.state.songs.map( t => {
          if (t.id === id)
            return res.data
          return t
        });

        this.setState({ songs });
      })
  }

  deleteSong = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( () => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( t => t.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">
        <SongsForm addItem={this.addItem} />
        {/* ^^ this is passing the addItem function as a prop to the TodoForm  */}
        <SongsForm
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          />
          {/* // needs to know about all of our todos */}
          {/* here we are passing props from parent to child */}
      </div>
    );
  }
}

export default App;
