import React from 'react'
import Search from './Search'
import Content from './Content'
import { useState } from 'react'

const MainX = () => {
  const [meaning,setMeaning] = useState<any>([])
  return (
    <>
        <Search setMeaning={setMeaning}/>
        {meaning.length>0?<Content meaning={meaning} /> : <></>}
        
    </>
  )
}

export default MainX