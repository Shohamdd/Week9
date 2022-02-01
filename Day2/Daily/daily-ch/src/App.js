import logo from "./logo.svg";
import "./App.css";
import RobotList from "./components/RobotList";
import SearchBar from "./components/SearchBar";
import React from "react";
import { getUsers } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { getUsers } = this.props;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => getUsers(data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <RobotList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (data) => dispatch(getUsers(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);
