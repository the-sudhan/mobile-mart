import { useContext } from "react"
import { Context } from "../Context"

export const Favourites =()=>{
    const{state}=useContext(Context)
    return(
        <div>
            <h1>Favorites</h1>
            <div className='row'>
                {state.myFav?.map((v,i) => {
                    return (
                        
                        <div className='col'>
                            <div className='card'>
                                <div className='imgs'>{v.imageUrl}</div>

                                <h2>{v.Name}</h2>
                                <p>Rs.{v.Price}</p>
                            </div>
                        </div>  
                    )})}      
        </div>
        </div>
    )
}