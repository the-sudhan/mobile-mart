import { useContext } from "react"
import { Context } from "../Context"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Cart =()=>{
    const navigate=useNavigate();
    const{state,dispatch}=useContext(Context)
    const decAmount=(id)=>{
        dispatch({type:"decAmount",payload:id})
    }
    const incAmount=(id)=>{
        dispatch({type:"incAmount",payload:id})
    }
    
    
    return(
        <div>
            <h1>Cart</h1>
            <div className='row'>
                {state.myCart?.map((v,i) => {
                    return (
                        <div className='col'>
                            <div className='card'>
                                <div className='imgs'>{v.imageUrl}</div>
                                <h2>{v.Name}</h2>
                                <div className="c-row">
                                        <div className="c-c1" onClick={()=>decAmount(v.id)}><FaMinus/></div>
                                        <div className="c-c2">
                                            <h5> Price :{v.Price}</h5>
                                            <h5>No.Quantity: {v.count}</h5>
                                            <h5>Total Amount :{v.Price*v.count}</h5>
                                        </div>
                                        <div className="c-c3" onClick={()=>incAmount(v.id)}><FaPlus /></div>
                                    </div>
                            </div>
                        </div>  
                    )})}      
        </div>
        <h1 onClick={()=>navigate("/purchase")}>Purchase</h1>
        </div>
    )
}