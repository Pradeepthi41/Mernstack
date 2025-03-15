import Post from "../components/Post";

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Home Feed</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
