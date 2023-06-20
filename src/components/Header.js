import {Link} from "react-router-dom"
import "./header.css"
import { useContext } from "react"
import { cartContext } from "../Context"
import {FaShoppingCart} from "react-icons/fa"

export default function Header(){
    const {cart, setCart} = useContext(cartContext)     
    return(
        <header>
                  <h3>Logo</h3>
                  
                  <nav>
                    <Link to='/'>Product</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Create Account</Link>
                    <Link to='/contact'>Contact us</Link>
                  </nav>

                <Link to="/cart" style={{width:"20%"}} >  <span style={{
                  width:"100%"
                }}>Cart <FaShoppingCart/> <small className="cart-size" style={{fontSize:"15px"}}>{cart.length}</small></span></Link>
            </header>
    )
}