import React from 'react'
import "./SearchBar.css"
export default function SearchBar() {
  return (

<div className="form-control w-full px-14 sm:px-20">
      <input
        type="text"
        required=""
        placeholder="Discover what I can do "
        className="input input-alt "
  
      />
      
      {/* <span className="input-border input-border-alt  "></span> */}
</div>
  )
}
