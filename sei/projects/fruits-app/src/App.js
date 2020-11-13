import React, {Component} from 'react';
import ListContainer from './ListContainer';
import Search from './Search';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchValue: "Water World!"
    }
  }
  render (){
    return (
      <>
      <h1>Fruits</h1>
      <Search value = {this.state.searchValue}
      onChange={this.state.handleSearchChange}/>
      <ListContainer />
      </>
    )
  }
  handleSearchChange = (e) =>{
    const textValue = e.target.value;
console.log('OMG it works',textValue);
this.setState({
  searchValue: textValue,
});
  }
}
export default App;