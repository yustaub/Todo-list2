import React,{Component} from 'react';
import './ListItem.css'
import { black } from 'color-name';
// const Listitem = (props) => {
//     const item=props.item;
//     if(item.done){
//         return <p><button className="done-item">{item.content}</button></p>
//     }else{
//         return <button className="item">{item.content}</button>
//     }
// }
class Listitem extends Component{
    constructor(props){
        super(props);
        this.state={
            clicked:false,
            color:"black"
        }
    }
    onClicked=(event)=>{ //响应点击事件
        this.setState(
            {
                clicked:true,
                color:"gray",
                textDecoration:"line-through"
            }
        )
    }
    render(){
        const item = this.props.item;
        const style={
            color:this.state.color,
            textDecoration:this.state.textDecoration
        }
        if (item.done){
            return <p><button className = "done-item" disabled >{item.content}</button></p>
        }
        else{
            return <p><button className = "item" onClick = {this.onClicked} disabled={this.state.clicked} style={style}>{item.content}</button></p>
        }
    }
}

export default Listitem;