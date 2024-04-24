import React from 'react'
import {UseSearchParams,useParams, useSearchParams} from 'react-router-dom'


// get query parameter
//display result accordingly
//link to a single trip as data


const Search= () => {
  const [SearchParams,setSearchParams] = useSearchParams();
  const param = SearchParams.get('key')  
    return (
    <div>Search params : {param}</div>
  )
}
export default Search