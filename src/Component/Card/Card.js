import React, { useState } from "react"
// import "./Card.css"

const Card=()=>{
        const [Name,setName] =useState(null);
        const [Age,setAge] =useState(null);
        const [Place,setPlace] =useState(null);
        const [arr,setArr] =useState([]);

        //1)Destructure
        // const myObj={
        //   name:"Hari",
        //   age:21,
        //   place:"tenkasi"
        // }
        // const {age}=myObj
        // console.log(age);

        //2)deep copy
        // let a=10;
        // let b=a;
        // a=15;
        // console.log(a,b);
        //3)shallow copy
        const a1=[1,2,3,4]
        const b1=[...a1]
        a1.push(5)
        b1.push(6)
        console.log(a1,b1);


        const myArr=["Tenkasi","Tirunelveli","Chennai","trichy"]

        const [myPlace,...y]=myArr

        console.log(myPlace,y);

        const getName=(e)=>
        {
          if(e.target.name==="Name")
          {
            setName(e.target.value);
          }

          if(e.target.name==="Age")
          {
            setAge(e.target.value);
          }

          if(e.target.name==="Place")
          {
            setPlace(e.target.value);
          }
        }
      const getData=() =>{
         const details={
                    N:Name,
                    A:Age,
                    P:Place
         };
         setArr([...arr,details]); 
        } 

  return(
    <>
    <div>
        <input type="text" name="Name" onChange={getName} placeholder="Name"></input><br></br>
        <input type="number" name="Age" onChange={getName} placeholder="Age"></input><br></br>
        <input type="text" name="Place" onChange={getName} placeholder="Place"></input><br></br>
        <button onClick={getData}>Click Me</button>
    </div>
    <div className="card">
      {arr.map((value,index)=>{
        return(
          <div key={index}className="details">
            <div> Name:{value.N}</div>
            <div> Age:{value.A}</div>
            <div> Place:{value.P}</div>
            </div>
        )
      })}
      
    </div>
    </>
  );
}

export default Card;


