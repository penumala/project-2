import React, {Component} from 'react';
import ListItem from './ListItem'
const fruits = [
    "Mango", "Banana","Orange",
    "Apple", "Pineapple", "Dates",
];
class ListContainer extends Component{
    render(){
        const allFruits = fruits.map((fruit, index) => {
            return <ListItem name={fruit} key={index} />;
          });
        return (
            <ul>
              {allFruits}

            </ul>
        )
    }
}
export default ListContainer;