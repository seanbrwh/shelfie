import React,{Component} from 'react';

export default class Form extends Component{
    constructor(){
        super()
        this.state ={
            image_Url: '',
            product_Name: '',
            price: 0
        }
    }
    handleImage(val){
        this.setState({
            image_Url: val
        })
    }
    handleName(val){
        this.setState({
            product_Name: val
        })
    }
    handlePrice(val){
        this.setState({
            price:val
        })
    }
    handleCancel(){
        this.setState({
            image_Url: '',
            product_Name: '',
            price:0
        })
    }
    render(){
        console.log([this.state.image_Url,this.state.product_Name,this.state.price]);
        return(
            <div>
                <input onChange={(e)=> this.handleImage(e.target.value)} type="text"/>        
                <input onChange={(e)=> this.handleName(e.target.value)} type="text"/>        
                <input onChange={(e)=> this.handlePrice(e.target.value)} type="text"/>        
                <button onClick={()=>this.handleCancel()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}