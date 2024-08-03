import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched users:', data); 
        setUsers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const colors = [
    '#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5',
    '#392F5A', '#5F4B8B', '#6A0572', '#A23E48', '#F2A65A'
  ];

  return (
    <section>
      <h1>Utilisateurs</h1>
      {users.map((user, index) => (
        <article key={user.id} style={{ backgroundColor: colors[index % colors.length] }}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Ville: {user.address.city}</p>
        </article>
      ))}
    </section>
  );
}

export default App;
