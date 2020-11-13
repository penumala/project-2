import React, {Component} from 'react';
class Search extends Component{
    render(){
        return(
            <>
            <label>Search these Fruits:</label>
            <input type = "text"
            value= {this.props.searchvalue}
            onChange={this.props.onChange}
            placeholder = "Search for ?" />
            </>
        )
    }
}
export default Search;