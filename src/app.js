import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';



class App extends Component  {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Adia Boyd",
        phone: "(973) 350-4655",
        email: "codeyab705@gmail.com",
        dob: "12-24-1992"
      },
      {
        id: 2,
        image: "",
        name: "Daja West",
        phone: "(973) 123-8910",
        email: "dajas304gmail.com",
        dob: "03-23-1994"
      },
      {
        id: 3,
        image: "",
        name: "FC Murray",
        phone: "(909) 723-1116",
        email: "fc394@gmail.com",
        dob: "07-23-1993"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">Click on carrots to filter by heading, or use the search box to narrow your results.</p>
        </nav>

        <input
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
