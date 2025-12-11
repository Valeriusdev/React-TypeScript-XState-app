import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-8">XState Machines</h1>
        <div className="space-y-4">
          <Link to="/toggle-machine">
            <button className="w-64 px-6 py-4 bg-blue-500 text-green-700 text-lg rounded-lg hover:bg-blue-600 transition-colors">
              Toggle Machine
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
