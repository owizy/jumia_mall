import faker from "faker"
import {useState} from "react"
import Product from "./Product"
import Header from "./Header"
import "./products.css"




export default function Products(){
    faker.seed(100)      
      const fakeProducts = [...Array(100)].map(()=>{
            return {
                 id:faker.datatype.uuid(),
                 name:faker.commerce.productName(),
                 price:faker.commerce.price(),
                 image:faker.random.image()
            }
      })
      const [products] = useState(fakeProducts)

  return(
        <div className="container">
            <Header/>

            <section className="products-container">
                {
                  products.map((product)=>{
                      return(
                          <Product prod= {product}/>
                      )
                  })
                }
            </section>
        </div>
      )
}