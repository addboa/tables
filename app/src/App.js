import React, { Component } from "react";
import MaterialTable from "material-table";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("/columns.json")
      .then(response => response.json())
      .then(columns => this.setState({ columns }));
    fetch("/data.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={this.state.columns}
          data={this.state.data}
          title="Reduct Data"
        />
      </div>
    );
  }
}

export default App;
