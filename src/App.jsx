/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  
  return(
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Extarnal Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name ={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div style={{border:"2px solid red",margin:"20px"}}>
      <h2>Name:{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(55);

const incriseCount = () => setCount(count + 1);
const decriseCount = () => setCount(count - 1);

  // const incriseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={incriseCount}>Incrise</button>
      <button onClick={decriseCount}>Decrise</button>
    </div>
  )
}

/*
  const products = [
    {name: 'laptop', price: 153000},
    {name: 'phone', price: 53000},
    {name: 'watch', price: 33000},
    {name: 'tablet', price: 10000},
  ]
*/
// {
//   products.map(product=> <Product name={product.name} price={product.price}></Product>)
// }
// <Product name="laptop" price = '170000'></Product>
// <Product name="phone" price = '70000'></Product>
// <Product name="watch" price = '3000'></Product>

function Product(props){
  return(
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}
export default App
