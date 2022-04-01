import React from 'react'
import withLayout from './pages/withLayout'

function Blog() {
  return (
    <div>
    <h1>WELCOME TO MY BLOG </h1>
    <div>
    <p>Welcome to Elderly Instruments,
     your favorite family-owned and
      operated music store in Lansing,
       Michigan. We carry a wide variety
        of new, used & vintage instruments 
        and have been shipping them world-wide
         since 1975. Whether you are looking for
         the latest guitar, a vintage mandolin,
          a used banjo, or accessories for all 
          of the above, we have you covered. Recent
           Arrivals. We have the new, used ...</p>


    <p>Welcome to Elderly Instruments, your favorite family-owned
     and operated music store in Lansing, Michigan. We carry a wide
      variety of new, used & vintage instruments and have been
       shipping them world-wide since 1975. Whether you are
        looking for the latest guitar, a vintage mandolin,
         a used banjo, or accessories for all of the above, we have
          you covered. Recent Arrivals. We have the new, used ...</p>


    <p>Welcome to Elderly Instruments, your favorite family-owned
     and operated music store in Lansing, Michigan. We carry a wide 
     variety of new, used & vintage instruments and have been shipping 
     them world-wide since 1975. Whether you are looking for the latest
      guitar, a vintage mandolin, a used banjo, or accessories for all of
       the above, we have you covered. Recent Arrivals. We have the
        new, used ...</p>

    </div>
    </div>
  )
}

export default withLayout(Blog)