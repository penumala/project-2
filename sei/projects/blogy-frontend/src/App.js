import React, {Component} from 'react';
import Articles from './articles/components/Articles';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles:[],
    }
  }

  setArticles =(articles) => {
    this.setState({articles:articles});
  }
  render(){
    return(
      <>
      <h2>Welcome to Blogy</h2>
    <h3>{process.env.REACT_APP_BASE_URL}</h3>
      <Articles articles={this.state.articles}
      setArticles={this.setArticles}/>
      </>
    )
  }
}export default App;