import React from 'react'
import { createContext, useState } from 'react';
import ContextChild1 from './ContextChild1';
import ContextChild2 from './ContextChild2';
export const MainContext = createContext();
function ContexParent1(){
    return(
        <>
        <div className='card'>
        Main Component
        <div className='card-body'>
            <ContextChild1/>
        </div>
        </div>
        </>
    )
}
function ContexParent2(){
    return(
        <>
        <div className='card'>
        Main Component
        <div className='card-body'>
            <ContextChild2/>
        </div>
        </div>
        </>
    )
}
function UseContext() {
    const [darkTheme, setDarkTheme]= useState(true) 
       function toggleTheme(){
        setDarkTheme((prevDarkTheme)=>
          !prevDarkTheme
        )
      }
  return (
    <MainContext.Provider value={darkTheme}>
        <center>
        <div className='container'>
            <div className='card'>
                <div className='card-body'>
                MAIN CONTEXT
                <br/>
                    <button className='btn btn-outline-success' onClick={toggleTheme}>
                        Toggle theme
                    </button>
                </div>
                <div>
                    <ContexParent1/>
                    <ContexParent2/>
                </div>
            </div>
        </div>
        </center>
    </MainContext.Provider>
  )
}

export default UseContext