import React, {Component} from 'react';
import ListItem from './ListItem'
class ListContainer extends Component{
    render(){
        return (
            <ul>
              <ListItem/>
              <ListItem/>
              <ListItem/>

            </ul>
        )
    }
}
export default ListContainer;