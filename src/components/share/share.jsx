import React from 'react'
import './share.css';
import Divan from '../../assets/Divan.png';
import EamesChair from '../../assets/Eames Chair.png';
import Futon from '../../assets/Futon.png';
import MurphyBed from '../../assets/Murphy Bed.png';
import Ottoman from '../../assets/Ottoman.png'
import Pouf from '../../assets/Pouf.png';
import TrestleTable from '../../assets/Trestle Table.png';
import Tuffet from '../../assets/Tuffet.png'
import BuffetTable from '../../assets/Buffet Table.png'

const Share = () => {
  return (
    <div className='share-content'>
        <div className='content__center'>
            <p>Share your setup with us</p>
            <h1>#FuniroFurniture</h1>
        </div>


        <div className='share-gallery'>
            <img src={Ottoman} alt='logo'/>
            <img src={EamesChair} alt='logo'/>
            <img src={Divan} alt='logo'/>
            <img src={TrestleTable} alt='logo'/>
            <img src={BuffetTable} alt='logo'/>
            <img src={MurphyBed} alt='logo'/>
            <img src={Pouf} alt='logo'/>
            <img src={Tuffet} alt='logo'/>
            <img src={Futon} alt='logo'/>
        </div>
        
        
        </div>
  )
}

export default Share