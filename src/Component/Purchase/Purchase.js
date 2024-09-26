import React, { useContext } from "react";
import { Context } from "../Context";
import "./Purchase.css"

const Purchase = () => {
    const { state } = useContext(Context);

    return (
        <div className="Purchase">
            <h2>Purchase Details</h2>
            <table style={{border:"1px"}}>
                <thead >
                    <tr>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {state.myCart?.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.Name}</td>
                                <td>Rs. {v.Price * v.count}</td>
                                <td>{v.count}</td>
                                <td>Rs.{v.Price*v.count}</td>
                            </tr>

                
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Purchase;