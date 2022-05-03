import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './AddBtn.scss';

const AddBtn = () => {
   return ( 
      <Link to='/add-book' className='addBtn__link d-block'>
         <button className='addBtn__btn'>
            <FontAwesomeIcon className='addBtn__icon' icon={faPlus} />
         </button>
      </Link>
   );
}
 
export default AddBtn;