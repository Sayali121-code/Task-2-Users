import * as React from "react";
//import logo from './logo.svg';
import "./App.css";
import { connect } from "react-redux";
import store from "./store";
import { add, remove } from "./action";

interface IApp { add: string[] }

class App extends React.Component<IApp> {
  state = {
    add: "",
    remove: ""
  };

  handle_addinfo = (e: any) => {
    e.preventDefault();
    console.log("ADD:", this.state.add);
    this.setState({
      add: ""
    });
    store.dispatch(add(this.state.add));
  };

  handle_removeinfo = (eve: any) => {
  console.log('>> eve', eve);
    store.dispatch(remove(eve))
  };

  render() {
    console.log(">> this.props", this.props);
    return (
      <div className="App">
        <form onSubmit={this.handle_addinfo}>
          <label>ADD : </label>
          <input
            type="text"
            name="add"
            value={this.state.add}
            onChange={e => this.setState({ add: e.target.value })}
          />
          <button type="submit"> Add Record</button> 
        </form>

        <div>
          Added Records:
          {this.props.add.map((item, i) => (
            <p key={i}>  {item}
                 <span onClick={()=>this.handle_removeinfo(item)}>  X  </span>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { state, add: state.add };
};

export default connect(mapStateToProps)(App);
//export default App;
