import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/Products"
import Cart from "./components/Cart"
import "./components/app.css"

export default function App(){
    return(
     <BrowserRouter>
         <Routes>
                 <Route path="/" element={<Product/>}/>
                 <Route path="/cart" element={<Cart/>}/>
         </Routes>
     
     </BrowserRouter>
    )
}