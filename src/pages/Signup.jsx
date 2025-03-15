const Signup = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form className="flex flex-col space-y-4 w-64">
          <input type="text" placeholder="Username" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="bg-green-600 text-white p-2 rounded">Signup</button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  