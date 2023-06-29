import React, { useRef, useState } from 'react'

function UseRef() {
    const [StateExample, setExample] = useState(0)

    const RefExample = useRef(0);
    const changeRef=()=>{
        RefExample.current = RefExample.current+1;
        console.log(RefExample.current)
    }
    const changeState=()=>{
        setExample(StateExample+1)
    }

  return (
    <center>
    <div>
        <div>
            State Value: {StateExample}
        </div>
        <div>
            
            Ref Value: {RefExample.current}
            <div>
            <button className='btn btn-outline-success' onClick={changeRef}>REF</button>
            <button className='btn btn-outline-success'  onClick={changeState}>STATE</button>
        </div>
        </div>
    </div>
    </center>
  )
}

export default UseRef