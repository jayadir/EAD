import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
function App() {
  const [name,setName]=useState("")
  const [dob,setDob]=useState("")
  const [age,setAge]=useState(0)
  const [roll,setRoll]=useState(0)
  const [email,setEmail]=useState("")
  const handleSubmit=async()=>{
    const res=await axios.post("http://localhost:5000/students",{
      Student_name: name,
        Student_age: age,
        Student_roll: roll,
        Student_email: email,
        isCurrentStudent:true,
        Student_DOB: dob
    })
    console.log(res);
    if(res.status===200){
      alert("success")
    }
  }
  return (
    <div className="App">
      <h1>CRUD</h1>
      <label>Name:</label>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <label>DOB:</label>
      <input type="date" onChange={(e)=>setDob(e.target.value)}/>
      <label>Age:</label>
      <input type="number" onChange={(e)=>setAge(e.target.value)}/>
      <label>Roll:</label>
      <input type="number" onChange={(e)=>setRoll(e.target.value)}/>
      <label>Email:</label>
      <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
