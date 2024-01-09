import { useState } from 'react'
import './App.css'
import './index.css'
import { puppyList } from './data.js'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId) 
  
  
  return (
    <div>
      {featPupId && (
        <div className = "featPup" >
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        { 
          puppies.map((puppy) => {
            return <p className = "puppyChoices" onClick={()=>{ setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
   );
}

export default App
