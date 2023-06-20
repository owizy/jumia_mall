import { useContext} from "react"
import {useState, useEffect } from "react"
import { cartContext } from "../Context"
import Product from "./Product"
import Header from "./Header"


export default function Carts(){
    const {cart, setCart} = useContext(cartContext)

    const [totalPrice, setTotalPrice] = useState()
     
      useEffect(()=>{
             
             setTotalPrice(
                 cart.reduce((total, item)=>{
                          return total + Number(item.price)
                   },0)
             )
      }, [cart])
      
    return(
        <div className="container">

               <Header/>
              <div className="cartContainer">
                <h1>Total Price: $<b>{totalPrice}</b></h1>
                {cart.map((prod)=>{
                 return <Product prod={prod}/>
           })}
          </div>

        </div>
    )
}