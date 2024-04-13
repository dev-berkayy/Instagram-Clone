import Reels1 from './Reels1'
import React from 'react'


function Reels() {

   const reels = [1, 2, 3, 4]
   return (
      <div className='container'>

         {reels.map((reels, index) =>
            <Reels1 classId={`reels-${index}`} />
         )}



      </div>
   )
}

export default Reels