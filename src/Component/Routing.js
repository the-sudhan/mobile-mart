import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import { Favourites } from "./Favorites/Favorites"
import { Cart } from "./Cart/Cart"
import {Register } from "./Register/Register"
import {Login} from "./Login/Login"
import { Context } from "./Context"
import { useContext,useReducer } from "react"
import { initialState,reducer } from "./State"
import Purchase from "./Purchase/Purchase"


const Routing=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    return(
        <>
        <Context.Provider value={{state,dispatch}}>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/favorites" element={<Favourites/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/purchase" element={<Purchase/>}/>
            </Routes>
        </BrowserRouter>
        </Context.Provider>
        </>
    )
}
export default Routing