import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    // 1. Define the function to call your backend
    const fetchTestData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/test");
        const data = await response.json();
        
        // 2. Update state with the message from your backend index.ts
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to connect to backend.");
      }
    };

    fetchTestData();
  }, []); // Empty array means this runs once when the component mounts

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-600">BookMyRoom Frontend</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
        <p className="text-gray-700">Backend Status: <span className="font-mono font-bold">{message}</span></p>
      </div>
    </div>
  );
}