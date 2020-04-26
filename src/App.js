import { Component } from "react";
import CardList from "./CardList";
import { robot } from "./robot";
import SearchBox from "./SearchBox";
import React from "react";
import "./App.css";
import Scroll from "./Scroll";
import Errorboundary from "./Errorboundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robot: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobot = this.state.robot.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <Scroll>
          <Errorboundary>
            <CardList robot={filteredRobot} />
          </Errorboundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
