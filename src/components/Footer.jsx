import './Footer.css'
import { Navigate, useNavigate } from 'react-router-dom'
function Footer(){

   const navigate =useNavigate()
   const goToCart=(e)=>{
         e.preventDefault()
         navigate('/viewcart')
   }

   const GotToContact=()=>{
      navigate('/contact')
   }
   const GoToLogin=()=>{
      navigate('/login')
   }

   const GoToAcc=()=>{
      navigate('/profile')
   }
    return(
        <>
        <div className="main_footer">

        
            
         <div className="exclusive">
            <h4>Support</h4>
            <p>do email at</p>
            <p>menoimrankhan1@gmail.com</p>
            
            </div>   
            
         <div className="exclusive">
            <h4>Account</h4>
            <p onClick={GoToAcc}>my account</p>
            <p onClick={GoToLogin}>login/register</p>
            <p onClick={goToCart}>cart</p>
            <p>shop</p>
            </div>   
            
        
         <div className="exclusive">
           
           <p onClick={GotToContact}>Contact</p>
            </div>   
        


        </div>
        </>
    )
}
export default Footer