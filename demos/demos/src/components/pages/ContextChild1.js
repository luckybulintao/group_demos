import React, { useContext} from 'react'
import { MainContext } from './UseContext'
import UseContext from './UseContext'

function ContextChild1() {
  const darkTheme = useContext(MainContext)
  const themeStyles = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white': 'black'
  }

  return (
    <div className='card' >ContextChild1
        <div className='card-body' style={themeStyles}>
            Component1
        </div>
    </div>
  )
}

export default ContextChild1