import React from "react"
import "./explore.css";
// import Crendenza from '../../assets/Credenza.png'
import ChaiseLounge from '../../assets/Chaise Lounge.png'
import ChinaCabinet from '../../assets/China Cabinet.png'
// import RightArrowIcon from '../../assets/right arrow.png'



const Explore = () => {
  return (
      <div className='explore_container'>
      <div className='explore_content'>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p >Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>

        <button type='button' className='explore__button'>Explore more</button>
      </div>




      <div className='container'>
        <p>01 <hr/> Bed Room</p>
        <h2>Inner Peace</h2>
        </div>
        

        {/* <div className="arrow__flex-end">
        <img src={RightArrowIcon} alt='logo' />
        </div> */}

        <div className='explore__gallery-images'>
        {/* <img src={Crendenza} alt='logo' /> */}
        {/* <img src={RightArrowIcon} alt='logo'  className="arrow-bottom"/> */}
        <img src={ChaiseLounge} alt='logo' className="gallery-image__height" />
        <img src={ChinaCabinet} alt='logo' />  
          
       
      </div>


      
    </div>

  
  
      
    
  )
}

export default Explore

