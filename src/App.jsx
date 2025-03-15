import './styles.css';
import { useEffect } from 'react';
useEffect(() => {
  fetch("http://localhost:5000/api/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err));
}, []);


function App() {
  return (
    <div className="container">
      <h1>Welcome to My Social Media App</h1>
      <p>Explore different sections below:</p>

      <div className="grid">
        <div className="card">
          <h2>Home</h2>
          <p>Welcome to the home page.</p>
          <button>Explore</button>
        </div>

        <div className="card">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>

        <div className="card">
          <h2>Register</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
        </div>

        <div className="card">
          <h2>Posts</h2>
          <input type="text" placeholder="Post Title" />
          <textarea placeholder="Write your post..." rows="4"></textarea>
          <button>Submit</button>
        </div>

        <div className="card">
          <h2>Profile</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <button>View Profile</button>
        </div>
      </div>

      <footer>© 2025 Social Media App</footer>
    </div>
  );
}

export default App;
