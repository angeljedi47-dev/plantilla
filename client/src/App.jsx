import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // LLAMADA AL BACKEND
    // Fíjate que usamos la URL completa donde corre tu servidor Node.js (puerto 3000)
    fetch('http://localhost:3000/api/v1/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // El backend devuelve { status: 'success', data: { users: [...] } }
        setUsers(data.data.users);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError("Error connecting to Backend. Is it running on port 3000?");
        setLoading(false);
      });
  }, [])

  return (
    <div className="container">
      <h1>Frontend (React) 🤝 Backend (Node)</h1>
      <p>
        Esta página está servida por React en el puerto <strong>5173</strong> (o el que asigne Vite).
        <br />
        Los datos de abajo vienen de tu servidor Node.js en el puerto <strong>3000</strong>.
      </p>

      {loading && <p>Cargando usuarios...</p>}

      {error && <div className="error-box">{error}</div>}

      {!loading && !error && (
        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
