import { useEffect } from "react";
import { useState } from "react";
import UserList from "../components/UserList";
const Users = () => {
  const [users, setUsers] = useState([]);
  // const fetchUserHandler = () =>{
  //     fetch("http://localhost:3000/users").then(response =>{
  //         return response.json()
  //     }).then(data =>{
  //         // const transformedUsers = data.results
  //         setUsers(data)
  //         console.log(data);
  //     })
  // }
  useEffect(() => {
    fetch("http://localhost:3000/users", {
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: 'include',

    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <UserList items={users} />
    </div>
  );
};

export default Users;
