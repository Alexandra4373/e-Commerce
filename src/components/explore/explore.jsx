import React from 'react'
import './explore.css';
import Crendenza from '../../assets/Credenza.png'
import ChaiseLounge from '../../assets/Chaise Lounge.png'
import ChinaCabinet from '../../assets/China Cabinet.png'

const explore = () => {
  return (
    <div className='explore_container'>
      <div className='explore_align-left'>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>

        <button>Explore more</button>
      </div>

      <div className='container'>
        <p>01 <br/> Bed Room</p>
        <h2>Inner Peace</h2>

        <img src={Crendenza} alt='logo'/>
        <img src={ChaiseLounge} alt='logo'/>
        <img src={ChinaCabinet} alt='logo'/>
      </div>
      
    </div>
  )
}

export default explore
