import React,{Component} from 'react';
import Product from '../Product/Product';

export default class DashBoard extends Component{
    constructor(){
        super()
    }
    render(){
        let {invList} = this.props
        console.log(invList);
        return(
            <div>
                <div>DashBoard</div>
            
                {
                    invList.map(e=>(
                        <Product key={e.id} name={e.name} price={e.price} img={e.img_url}/>
                    ))
                }
            </div>
        )
    }
}