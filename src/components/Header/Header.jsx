import React, { useState } from 'react';
import "./Header.css";
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = ({cart,setCart}) => {
    const [visible, setVisible] = useState(false);

    const cut=(item)=>{
        console.log(item);
        const filter=cart.filter((e)=>e.id!=item.id)
       setCart(filter);
    }

    

    return (
        <div className='bg-[#2874F0] px-8 text-white flex justify-between items-center h-[60px] sm:w-full'>
            <div className='flipkart'>
                <h3>FlipKart</h3>
            </div>
            <div className='cart-count'>
 
                <ShoppingCartIcon onClick={()=>setVisible(true)} className='hover:cursor-pointer'/> <span className='absolute top-2  text-xl'>{cart.length}</span>
                {/* modal logic */}
        <Modal
        isOpen={visible}
        onRequestClose={()=>setVisible(false)}
        contentLabel="Example Modal"
        className="p-4  m-8 min-h-40 bg-white pb-4 rounded-md "
      >
        <div className='flex justify-between'>
        <h2>Cart Items</h2>
        <CloseIcon onClick={()=>setVisible(false)} className='text-red-600 hover:cursor-pointer'/>
        </div>
        
        <div className='mt-4'>
            {cart.length==0 ? <div><p> Add some items to show here...</p></div>
            :cart.map((item)=>{
                return(
                    <div key={item.id}>
                        <div className='flex justify-between items-center mt-6 mb-2 '>
                  <img src={item.image} alt="image" className='sm: w-8 md:w-12 ' />
                  <p className=' sm: text-xs p-2 md:text-xl'>{item.title}</p>
                  <button className=' sm: w-[50px] h-5  text-xs md: w-20 h-7 ' onClick={()=>cut(item)}>Remove</button>
                </div>
                <hr />
                    </div>
                    
                )
                  
            })}
           
        </div>
       
      </Modal>
            </div>
        

        
        </div>

    );
};

export default Header;