import { Component } from "react";

import '../searchbox/search-box.components.styles.css'

const SearchBox= ({onChangeHandeler})=>(
    <input className='search-box ' type='search' placeholder='search montrers'  onChange={onChangeHandeler} />
)

export default SearchBox;