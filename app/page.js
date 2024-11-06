"use client";
import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { componentData } from "@/components/componentlistLibrary";
import { useState } from "react";

// Helper function to set nested values without mutating state
const setNestedValue = (obj, path, value) => {
  const keys = path.split(".");
  const lastKey = keys.pop();
  const lastObj = keys.reduce((acc, key) => {
    if (typeof acc[key] !== "object") acc[key] = {}; // Initialize if key path is undefined
    return acc[key];
  }, obj);
  lastObj[lastKey] = value;
};

// Deep clone function to create a copy of an object
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export default function Page() {
  const [selectedSubComponent, setSelectedSubComponent] = useState(null);
  const [canvasState, setCanvasState] = useState(componentData);

  // Handler to select a subcomponent
  const handleSelect = (subComponent) => setSelectedSubComponent(subComponent);

  // Handler to update customization of a selected subcomponent
  const handleCustomizerChange = (subComponentId, fieldPath, value) => {
    const updatedCanvasState = deepClone(canvasState);
    const componentToUpdate = updatedCanvasState.find(
      (item) => item.id === subComponentId
    );

    if (componentToUpdate) {
      setNestedValue(componentToUpdate, fieldPath, value);
      setCanvasState(updatedCanvasState);
    }

    // Update selected component directly for immediate feedback in UI
    setSelectedSubComponent((prev) => {
      if (!prev) return null;
      const updatedComponent = deepClone(prev);
      setNestedValue(updatedComponent, fieldPath, value);
      return updatedComponent;
    });
  };

  return (
    <div className="w-full bg-slate-200 flex gap-10  items-center min-h-screen  justify-center">
      <div className="flex gap-10">
        <Sidebar />
        <Canvas
          subcomponents={canvasState}
          selectedSubComponent={selectedSubComponent}
          onSelect={handleSelect}
          onCustomizerChange={handleCustomizerChange}
        />
      </div>
    </div>
  );
}
