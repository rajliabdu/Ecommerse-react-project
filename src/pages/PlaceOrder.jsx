
import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import stripe_logo from '../assets/stripe_logo.png'
import razorpay_logo from '../assets/razorpay_logo.png'
import { useAccordionButton } from 'react-bootstrap'
import { ProductContext } from '../context/ProductContex'
import { toast } from "react-toastify";
const PlaceOrder = () => {
   const [method, setMethod] =useState("cod")
   const {navigate} = useContext(ProductContext)

const [deliveryInfo, setDeliveryInfo] = useState({
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  phone: "",
});

const handleChange = (e) => {
  setDeliveryInfo({
    ...deliveryInfo,
    [e.target.name]: e.target.value,
  });
};

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  

const placeOrder = () => {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipCode,
    country,
    phone,
  } = deliveryInfo;

    let hasError = false;

     // Check if user is logged in
  if (!currentUser) {
    toast.error("Please login first.");
    navigate("/login");
    return;
  }

  if (
    !firstName ||
    !lastName ||
    !email ||
    !street ||
    !city ||
    !state ||
    !zipCode ||
    !country ||
    !phone
  ) {
    toast.error("Please fill delivery information.");
    hasError = true;
  }

   if (hasError) {
    if (!currentUser) {
      navigate("/login");
    }
    return;
  }
    toast.success("Order placed successfully!");
  navigate("/orders");
};


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
         {/* ........left side..... */}
       
       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
           <div className='text-x1 sm:text-2xl my-3'>
             <Title  text1={'DELIVERY'} text2={' INFORMATION'}/>
           </div>
              <div className='flex gap-3'>
                 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' 
                      value={deliveryInfo.firstName}
                      onChange={handleChange} name="firstName"
                      type="text" placeholder='First name' />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  
                        value={deliveryInfo.lastName}
                        onChange={handleChange} name="lastName"
                        type="text" placeholder='Last name' />

              </div>
              <div  className='flex gap-3'>
                 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '
                            value={deliveryInfo.email}
                            onChange={handleChange} name="email" type="email" placeholder='Email address' />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '
                      value={deliveryInfo.street} name="street"
                      onChange={handleChange} type="text" placeholder='Street' />
                   </div>
                  <div className='flex gap-3'>
                      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '
                            value={deliveryInfo.city} name="city"
                            onChange={handleChange}    
                             type="text" placeholder='City' />
                        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' 
                            value={deliveryInfo.state} name="state"
                            onChange={handleChange} type="text" placeholder='State' />

              </div>
              <div className='flex gap-3'>
                 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' 
                    onChange={handleChange} type="number" name="zipCode" value={deliveryInfo.zipCode} placeholder='Zipcode' />
                                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  
                    value={deliveryInfo.country} name="country"
                    onChange={handleChange} type="text" placeholder='Country' />

                                </div>
                                <div className='flex gap-3'>
                                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  
                    value={deliveryInfo.phone} name="phone"
                    onChange={handleChange}type="number" placeholder='phone number' />

                                </div>


              </div>
                {/* ...right side... */}
                <div className='mt-8'>
                    <div className='mt-8min-w-80'>
                          <CartTotal />
                    </div>
                    <div className='mt-12'>
                             <Title  text1={'PAYMENT'} text2={'METHOD'}/>
                              {/* ..payment method selection... */}

                              <div className=' flex gap-3 flex-col lg:flex-row'>
                                    <div onClick={()=>setMethod('stripe')} className='flex items-center  border-gray-300 gap-3 border p-2 px-3 cursor-pointer'>
                                      <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ?  'bg-green-400' : ''}`}></p>
                                       <img className='mx-4 h-5' src={stripe_logo} alt="" />
                                    </div>
                                    <div onClick={()=>setMethod('razorpay')} className='flex items-center  border-gray-300 gap-3 border p-2 px-3 cursor-pointer'>
                                      <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ?  'bg-green-400' : ''}`}></p>
                                       <img className='mx-4 h-5' src={razorpay_logo} alt="" />
                                    </div>
                                    <div onClick={()=>setMethod('cod')} className='flex items-center  border-gray-300 gap-3 border p-2 px-3 cursor-pointer'>
                                      <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                                      <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                                       
                                    </div>
                              
                              </div>
                              
                          <div className='w-full text-end mt-8'>
                              <button   onClick={placeOrder}
                                      className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                            </div>
                    </div>

               

       </div>
    </div>
  )
}

export default PlaceOrder