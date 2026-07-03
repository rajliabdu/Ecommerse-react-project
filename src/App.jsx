
import {Routes , Route  } from 'react-router-dom';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
// import Register from './pages/Register';
// import PublicRoute from './component/routes/PublicRoute';
// import ProtectedRoute from './component/routes/ProtectedRoute';
import Login from './pages/Login';
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import Profile from "./pages/Profile";
 function App() {
  
  return (
    
     <div className="px 4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">


        <ToastContainer />
        <NavBar />
        <SearchBar />
           <Routes> 
              <Route  path = '/' element={<Home/>}/>
              <Route  path = '/collection' element={<Collection/>}/>
              <Route  path = '/about' element={<About/>}/>
              <Route  path = '/contact' element={<Contact/>}/>
              <Route  path = '/product/:productId' element={<Products                                                    />}/>
              <Route  path = '/cart' element={<Cart/>}/>
              <Route  path = '/login' element={<Login/>}/>
              <Route  path = '/place-order' element={<PlaceOrder/>}/>
              <Route  path = '/orders' element={<Orders/>}/>
              <Route path="/profile" element={<Profile />} />
          </Routes>
       <Footer />
       
    </div>
             
             
        
    
  )
}




export default App
