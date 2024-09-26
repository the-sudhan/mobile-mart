// import React, { useState } from "react"
// import Product from "../Product/Product";
//  const Home=(props)=>{
//     const names=["Hari","vishnu","jose"]
//     const [myName,setMyName]=useState("rahul")
//     const changeName=()=>{
//         setMyName(names[Math.floor(Math.random()*3)])
//     }
//     return(
//         <div>
//             <Product me={myName}/>
//             <button onClick={changeName}>Change Name</button>
//         </div>
//     );

// }
// export default Home

import React, { useContext, useState } from 'react';
import './Home.css'
import image1 from '../Assests/oppo.png';
import image2 from '../Assests/samsung.png'
import image3 from '../Assests/vivo.png'
import image4 from '../Assests/redmii.png'
import image5 from '../Assests/realme.png'
import image6 from '../Assests/iqoo.png'
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';

export const Home = () => {

    const {state,dispatch}=useContext(Context)
    const navigate=useNavigate()
    const mobiles = [{
        Name: "OPPO",
        id: 1,
        Price: 16000,
        imageUrl: <img src={image1} alt='oppo' />,
        isFav:false,
        isCart:false,
        count:1
    }, {
        Name: "SAMSUNG",
        id: 2,
        Price: 14000,
        imageUrl: <img src={image2} alt='samsung' />,
        isFav:false,
        isCart:false,
        count:1

    }, {
        Name: "VIVO",
        id: 3,
        Price: 18000,
        imageUrl: <img src={image3} alt='vivo' />,
        isFav:false,
        isCart:false,
        count:1

    }, {
        Name: "REDMI",
        id: 4,
        Price: 10000,
        imageUrl: <img src={image4} alt='redmi' />,
        isFav:false,
        isCart:false,
        count:1

    }, {
        Name: "REALME",
        id: 5,
        Price: 12000,
        imageUrl: <img src={image5} alt='realme' />,
        isFav:false,
        isCart:false,
        count:1

    }, {
        Name: "IQOO",
        id: 6,
        Price: 15000,
        imageUrl: <img src={image6} alt='iqoo' />,
        isFav:false,
        isCart:false,
        count:1

    }]

    const [mobile, setMobile] = useState([...mobiles])
    const [count,setCount]=useState(0)

    const sortAs = () => {
        if (mobile.length === mobiles.length) {
            const sortedArray = mobiles.sort((a, b) => {
                return a.Name.localeCompare(b.Name)
            })
            setMobile(sortedArray)
        }
        else {
            const sortedArray = [...mobile].sort((a, b) => {
                return a.Name.localeCompare(b.Name)
            })
            setMobile(sortedArray)
        }
    }

    const sortDs = () => {
        if (mobile.length === mobiles.length) {
            const sortedArray = mobiles.sort((a, b) => {
                return b.Name.localeCompare(a.Name)
            })
            setMobile(sortedArray)
        }
        else {
            const sortedArray = [...mobile].sort((a, b) => {
                return b.Name.localeCompare(a.Name)
            })
            setMobile(sortedArray)
        }
    }

    const sortAsPr = () => {
        if (mobile.length === mobiles.length) {
            const sortedArray = mobiles.sort((a, b) => {
                return a.Price - b.Price
            })
            setMobile(sortedArray)
        } else {
            const sortedArray = [...mobile].sort((a, b) => {
                return a.Price - b.Price
            })
            setMobile(sortedArray)
        }
    }

    const sortDsPr = () => {
        if (mobile.length === mobiles.length) {
            const sortedArray = mobiles.sort((a, b) => {
                return b.Price - a.Price
            })
            setMobile(sortedArray)
        } else {
            const sortedArray = [...mobile].sort((a, b) => {
                return b.Price - a.Price
            })
            setMobile(sortedArray)
        }

    }

    const filterChange = (e) => {
        const onChange = e.target.value;
        let filterValue = [];

        if (onChange === "Rs.10-15k") {
            filterValue = mobiles.filter((v) => {
                return v.Price <= 15000;
            })
        }
        else if (onChange === "Rs.15-20k") {
            filterValue = mobiles.filter((v) => {
                return v.Price >= 15000;
            })
        }
        if (onChange === "All") {
            filterValue = mobiles.filter((v) => {
                return v.Price;
            })
        }
        setMobile(filterValue);
    }
    const likebtn=((id)=>{
        const likedarray = [...mobile].map((v,i)=>{
            return v.id===id? {...v,isFav:!v.isFav}:v;
        })
        setMobile(likedarray)

    })

    const goToFav=()=>{
        const filArr=[...mobile].filter((v,i)=>{
            return v.isFav===true;
        })
        dispatch({type:"fav",payload:filArr})
        navigate("/favorites");
    }
    
    const addToCart=((id)=>{
        const cartedarray = [...mobile].map((v,i)=>{
            if(v.id===id){
                setCount(count+1);
                return{...v,isCart:true}
            }
            else{
                return v
            }
        })
        setMobile(cartedarray)
    })


    const goToCart=()=>{
        const filArr=[...mobile].filter((v,i)=>{
            return v.isCart===true;
        })
        dispatch({type:"cart",payload:filArr});
        navigate("/cart");
    }

    const cartRemove=((id)=>{
        const cartedarray = [...mobile].map((v,i)=>{
            if(v.id===id){
                setCount(count-1);
                return{...v,isCart:false}
            }
            else{
                return v
            }
        })
        setMobile(cartedarray)
    })

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='row1'>
                        <div className='col1'>
                            <h1>Classy Cell Studio</h1>
                        </div>
                        <div className='col2'>

                            <ul className='lists'>
                                <li className="home">Home</li>
                                <li className="about">About</li>
                                <li onClick={goToFav} className='fav'>Favorites</li>
                                <li onClick={goToCart}className='cart'>Cart:{count}</li>
                                <li onClick={()=>navigate("/login")}className='logout'>Logout</li>
                                <li className='purchase'>purchase</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className='btn'>
                <select className='filter' onChange={filterChange}>
                    <option>Filter</option>
                    <option>All</option>
                    <option>Rs.10-15k</option>
                    <option>Rs.15-20k</option>

                </select>

                <button onClick={sortAs}>Ascending by Name</button>
                <button onClick={sortDs}>Descending by Name</button>
                <button onClick={sortAsPr}>Ascending by Price</button>
                <button onClick={sortDsPr}>Descending by Price</button>
            </div>

            <div className='row'>
                {mobile.map((v, i) => {
                    return (
                        <div className='col'>
                            <div className='card'>
                                <div className='crt'>
                                {v.isCart? <button onClick={()=>cartRemove(v.id)}>Added</button>:<button onClick={()=>addToCart(v.id)}>Add to Cart</button>}
                                </div>
                                <div className='imgs'>{v.imageUrl}</div>

                                <h2>{v.Name}</h2>
                                <p>Rs.{v.Price}</p>
                                <div className='heart'>
                                <div className={v.isFav===true?"red":"black"} onClick={()=>likebtn(v.id)}><GoHeartFill />
                                </div>
                                
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    );
}
export default Home
