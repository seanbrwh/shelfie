import React,{Component} from 'react';
import axios from 'axios'

export default class Form extends Component{
    constructor(){
        super()
        this.state ={
            img_url: '',
            name: '',
            price: 0
        }
        this.handleName = this.handleName.bind(this); 
        this.handleImage = this.handleImage.bind(this); 
        this.handlePrice = this.handlePrice.bind(this); 
        this.handleCancel = this.handleCancel.bind(this); 
        this.addToInv = this.addToInv.bind(this); 
    }
    handleImage(val){
        this.setState({
            image_Url:val
        })
    }
    handleName(val){
        this.setState({
            product_Name:val
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
    addToInv(){
        let {img_url,name,price} = this.state;
        axios.post('http://localhost:3010/api/product',[{name,price,img_url}]).then(response=>{
            console.log(response);
            this.props.cDM()
            this.handleCancel()
        })
        
        
        
    }
    render(){
        return(
            <div>
                <input onChange={(e)=> this.handleImage(e.target.value)} type="text" placeholder='IMG'/>        
                <input onChange={(e)=> this.handleName(e.target.value)} type="text" placeholder='NAME'/>        
                <input onChange={(e)=> this.handlePrice(e.target.value)} type="text" placeholder='PRICE'/>        
                <button onClick={()=>this.handleCancel()}>Cancel</button>
                <button onClick={()=>this.addToInv()}>Add to Inventory</button>
            </div>
        )
    }
}