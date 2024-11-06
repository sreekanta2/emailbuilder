import { useState } from "react";
import CanvasComponent from "./CanvasComponent";
import Customizer from "./Customizer";

const setNestedValue = (obj, path, value) => {
  const keys = path.split(".");
  const lastKey = keys.pop();

  // Create a shallow copy of the object at each level
  const newObj = { ...obj };
  let current = newObj;
  for (const key of keys) {
    current[key] = { ...current[key] };
    current = current[key];
  }
  current[lastKey] = value;
  return newObj;
};

const Canvas = () => {
  const [selectedSubComponent, setSelectedSubComponent] = useState(null);

  const [subcomponents, setSubcomponents] = useState([]);

  const [error, setError] = useState(null);

  const handleSelect = (subComponent) => setSelectedSubComponent(subComponent);

  const handleDrop = async (e) => {
    e.preventDefault();
    const data = window.localStorage.getItem("draggedComponent");
    const { componentId } = JSON.parse(data);

    try {
      const response = await fetch(`/api/components/${componentId}`);
      if (!response.ok)
        throw new Error(`Error fetching subcomponents: ${response.status}`);

      const result = await response.json();
      setSubcomponents((prevSubcomponents) => [
        ...prevSubcomponents,
        ...result.data, // Assuming result.data is an array of subcomponents
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCustomizerChange = (subComponentId, fieldPath, value) => {
    setSubcomponents((prevSubcomponents) =>
      prevSubcomponents.map((subComponent) =>
        subComponent.pk === subComponentId
          ? setNestedValue(subComponent, fieldPath, value)
          : subComponent
      )
    );

    setSelectedSubComponent((prev) =>
      prev && prev.pk === subComponentId
        ? setNestedValue(prev, fieldPath, value)
        : prev
    );
  };

  return (
    <div className="flex items-start gap-10  ">
      <div
        className=" w-[450px] border border-dashed border-gray-600 min-h-64 rounded-md p-6"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {error && <p>Error: {error}</p>}
        {subcomponents.length === 0 ? (
          <p>Drag a component from the sidebar...</p>
        ) : (
          <ul>
            <CanvasComponent
              subcomponents={subcomponents}
              onSelect={handleSelect}
            />
          </ul>
        )}
      </div>
      <Customizer
        selectedItem={selectedSubComponent}
        onChange={handleCustomizerChange}
      />
    </div>
  );
};

export default Canvas;
