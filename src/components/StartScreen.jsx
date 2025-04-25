import React from 'react'

export default function StartScreen({numQusetions,dispach}) {
  return (
    <div className='start'>
        <h2>Welcome To React Quize</h2>
        <h3>{numQusetions} Questions to test Your React Quiz</h3>
        <button onClick={()=>{dispach({type:"start"})}} className='btn btn-ui'>Let's start</button>
    </div>
  )
}
