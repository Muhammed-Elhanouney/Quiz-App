import React from 'react'

export default function Progress({maxNumperQuestion, numQusetions ,points,index,answer}) {
  return (
<header className='progress'>
    <progress max={numQusetions} value={index + Number(answer !== null)}></progress>
    <p> Question {index+1} <strong></strong> / {numQusetions} </p>
    <p><strong>{points}</strong> / {maxNumperQuestion} </p>
</header>
)
}
