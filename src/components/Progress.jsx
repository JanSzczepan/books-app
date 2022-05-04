import React from 'react';

import './Progress.scss';

const Progress = ({progress}) => {

   const circumference = 23.7 * 2 * Math.PI;
   const strokeDashoffset = circumference - progress / 100 * circumference;

   return ( 
      <div className='header__progress-circle me-4'>
         <svg
            className="progress-ring"
            width="50"
            height="50">
            <circle
               className="progress-ring__circle"
               stroke="#946a4a"
               strokeWidth="3"
               fill="transparent"
               strokeDasharray={ circumference + ' ' + circumference }
               style={ { strokeDashoffset } }
               r="23.7"
               cx="25"
               cy="25"/>
         </svg>
      </div>
   );
}
 
export default Progress;