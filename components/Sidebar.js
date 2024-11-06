import { useEffect, useState } from "react";

// Sidebar Component with Drag-and-Drop functionality
const Sidebar = ({ onComponentDrop }) => {
  const [mainComponents, setMainComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching main components
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/components");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMainComponents(data.data); // Set the data to state
      } catch (error) {
        setError(error.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDragStart = (componentId) => {
    // Attach the component ID to the drag event's dataTransfer
    const data = JSON.stringify({ componentId });
    window.localStorage.setItem("draggedComponent", data);
  };

  return (
    <div className=" items-stretch w-44 p-6 border rounded border-gray-500 space-y-4 ">
      <h2 className="border-b border-gray-400 mb-3 text-center">Components</h2>

      <ul className="space-y-4 ">
        {mainComponents.map((component) => (
          <li
            className="px-4 py-2 border border-gray-400  rounded-md"
            key={component.id}
            draggable
            onDragStart={() => handleDragStart(component.id)} // Handle drag start
          >
            <h3>{component.componentInfo.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
