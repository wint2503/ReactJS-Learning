import { useState, useEffect } from "react";
import React from "react";
import User from "./components/users/User"
import AddUser from "./components/users/AddUser";

function App() {
  // let users = [
  //   {
  //     id: 1,
  //     image: "https://docs.flutter.dev/assets/images/shared/brand/flutter/logo+text/horizontal/default.svg",
  //     phone: "09199199199",
  //     cell: "300300300",
  //     name: "Su Su"
  //   },
  //   {
  //     id: 2,
  //     image: "https://docs.flutter.dev/assets/images/shared/brand/flutter/logo+text/horizontal/default.svg",
  //     phone: "09233233233",
  //     cell: "400400400",
  //     name: "Ei Ei"
  //   },
  //   { 
  //     id: 3,
  //     image: "https://docs.flutter.dev/assets/images/shared/brand/flutter/logo+text/horizontal/default.svg",
  //     phone: "09700700700",
  //     cell: "123123123",
  //     name: "Mg Mg"
  //   }
  // ]
  // let count = users.length; // normal variable
  
  
  // let [count,setCount] = useState(users.length);
  // let [name,setName] = useState("Su Su");
 
  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  // Get data using useEffect
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(users => { 
      let rawUsers = users.results;
      let filteredUsers = rawUsers.map(usr => {
        return {
          uuid : usr.login.uuid,
          name : `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
          phone : usr.phone,
          cell : usr.cell,
          image : usr.picture.thumbnail
        }
      })
      // console.log(filteredUsers);
      setUsers(filteredUsers);
    })
    .catch(err => console.log(err));
  }, []);

  let removeUserHandler = (uuid)=>{
    let remainUsers = users.filter(usr => usr.uuid !== uuid);
    setUsers(remainUsers);
  };

  let addUserHandler = (user)=>{
    let newUsers = [user,...users];
    setUsers(newUsers);
    setShowForm(!showForm);
  }
  const showFormHandler = ()=>{
    setShowForm(!showForm);
  }
  
  return (
    <div className="container my-2">
      <h1 className="text-center text-info my-5">Our Employee</h1>
      <button className="btn btn-primary btn-sm my-2" onClick={showFormHandler}>Show Form</button>
      {
        showForm && <AddUser addUser={addUserHandler}/> //ရှေ့ကမှန်မှ အနောက်ကအလုပ်လုပ်
      }
      {
        users.map(usr=> <User key={usr.uuid} data={usr} remove={removeUserHandler}/>)
      }
    </div>
  );
}

export default App;


/* <User image={users[0].image} phone={users[0].phone} cell={users[0].cell} name={users[0].name}/>
    <User image={users[1].image} phone={users[1].phone} cell={users[1].cell} name={users[1].name}/>
    <User image={users[2].image} phone={users[2].phone} cell={users[2].cell} name={users[2].name}/> */
    
/* <User data={users[0]}/>
    <User data={users[1]}/>
    <User data={users[2]}/> */