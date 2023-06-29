import React from 'react';
import Child from './Child';
function Parent({ name, age, child1,child2,child3 }) {
  return (
    <>
    <div className='card'>
      <h1>Parent

      </h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    <Child child1={child1} child2={child2}child3={child3}/>
    </div>
    </>
  );
}

export default Parent;
