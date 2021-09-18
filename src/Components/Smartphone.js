import React from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from 'react-router-dom';

export default class Smartphones extends React.Component{
    state={
        smartphones:"",
        id:'',
        image: '',
        price: '',
        name:'',
        

    }
    componentDidMount(){
        axios.get("http://localhost:3000/smartphones").then(res => {
        this.setState({
            smartphones: res.data
            })
    
        });       
    };

    render(){
        if(!this.state.smartphones){
            return(
                <div>
                    loding data
                </div>
            )
        }
        else{
            return(
                <>
                    <Header props={this.props}/>

                    <div className="big">
                        <div className="labs">
                            {this.state.smartphones.map((phone,index)=>{
                                return(
                                    <>
                                        <div className="device">
                                            <img className="" src={`/images/${phone.image}`} alt="this is laptop"/>
                                            <Link to={
                                    {
                                        pathname: '/Details',
                                        ref:phone

                                    }
                                      }>{phone.name}</Link>
                                            <span>${phone.price}</span>
                                            <button  className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>
                                        </div>

                                    </>
                                )
                            })}
                        </div>
                    </div>

                </>
            )
        }
    }
}