import { useContext } from "react"
import { cartContext } from "../Context"

export default function Product({prod}){
    const {cart, setCart} = useContext(cartContext)
    return(
        <div className="product-card">
              <img src={prod.image} alt='' width={100}/>
              <div className="description">
                  <span className="p-name">{prod.name}</span>
                  <span className="p-price">{prod.price}</span>
              </div>

              <div className="btn-box">
                  {cart.includes(prod) ? <button onClick={()=>{
                     setCart(cart.filter((removedItem)=>{
                           return removedItem.id !== prod.id
                       }))
                  }}>Remove From Cart</button> : <button onClick={()=>{
                       setCart([...cart, prod])
                  }} >Add to Cart</button>}
                  
              </div>
        </div>
    )
}