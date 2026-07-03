import { createContext ,useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

 


 export const ProductContext = createContext();
 const ProductContextProvider = (props) => {

     const [products, setProducts] = useState([]);
     const [search ,setSearch]=useState('');
     const [showSearch ,setShowSearch]=useState(false);
     const [cartItems ,setCartItems] = useState({}); 
 const navigate = useNavigate()
     const currency = '$';
      
     const delivery_fee =10;


      useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


     const addToCart =(itemId,size)=>{
        if(!size){
            toast.error('Select Product Size')
        }

       let cartData = structuredClone(cartItems);
       if (cartData[itemId]){
              if (cartData[itemId][size]){
                 cartData[itemId][size] += 1;
              }
       else{
            cartData[itemId][size]= 1;
       }
    }
     else{
        cartData[itemId] ={};
        cartData[itemId][size]= 1;

     }
     setCartItems(cartData)
    
} 
   const getCartCount = () =>{

    let totalCount= 0
    for ( const items in cartItems){
         for(const item in cartItems[items]){

            try{
                 if(cartItems[items][item] > 0){
                    totalCount += cartItems[items][item];
                 }
            }catch(error){

            }
         }

    }
       
  return totalCount

    
   }
    const updateQuantity = (itemId,size,quantity)=>{
      let cartData = structuredClone(cartItems);
        if (cartData[itemId] && cartData[itemId][size] !== undefined){
         cartData[itemId][size]=quantity;
         setCartItems(cartData);
    }
    }

   
     const getCartAmount = () => {
  let totalAmount = 0;

  for (const items in cartItems) {
    let itemInfo = products.find((product) => product.id === items);

    for (const item in cartItems[items]) {
      if (itemInfo && cartItems[items][item] > 0) {
        totalAmount += itemInfo.price * cartItems[items][item];
      }
    }
  }

  return totalAmount;
};
    
  
    const value ={
           products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch
           ,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
        }
    return (
        < ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )






 }
 export default ProductContextProvider