import './App.css';
import './style.css';
import { useEffect, useState } from 'react';

function Card() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=50&skip=0')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users);
        console.log(data);
      });
  }, []);

  const Cardcomp = ({ user }) => {
    return (
      <div className="container">
        <div className="card">
          <h1>THIS IS CARD</h1>
         
         <img src={user.image} alt="" />

          <div className="user-info">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="maincard">
        {users.map(user => (
          <Cardcomp key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default Card;
