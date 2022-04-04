import React from 'react'
import { useNavigate } from 'react-router-dom'
import withLayout from './withLayout'

function Home() {
  const navigate=useNavigate()
  return (
    <div>
   <div className='banner'>
   <h1>welcome to my webpage</h1>
   <p>the lord is my shepherd. i shall not want,
    he lead me beside still waters. 
    even thought i walk throungh the shadows of darkness i shall not want.
   his rod and spear he use to protect me.</p>
   <div className="actions-wrap">
   <button className='btn-online' onClick={()=>navigate("./about")}> About me</button>
   <button className='btn-contain'onClick={()=>navigate("./blog")}> Read Blogs</button>

   </div >

   </div>
    
    </div>
  )
}

export default withLayout(Home)