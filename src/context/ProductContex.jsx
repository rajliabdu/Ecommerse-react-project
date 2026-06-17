import { createContext ,useEffect,useState} from "react";

 


 export const ProductContext = createContext();
 const ProductContextProvider = (props) => {
     const [products, setProducts] = useState([]);
      
     const currency = '$';
      
     const delivery_fee =10;

    useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);



  
  
    
  
    const value ={
           products,currency,delivery_fee,
    }
    return (
        < ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )






 }
 export default ProductContextProvider