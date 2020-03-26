import ListItem from "./Listitem"
import React,{Component} from 'react';
import NewItem from "./NewItem";

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            todoList : [
                {content:'React pratice',done:true},
                {content:'game time',done:false}
            ]
        }
    }
    addNewItem=(newItemContent)=>{
        const newList=[...this.state.todoList,{content:newItemContent,done:false}];
        this.setState({
            todoList:newList
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.todoList.map(item => <ListItem item={item}/>)
                }
                <NewItem addItem={this.addNewItem}/>
            </div>
        )
    }
}
export default TodoList