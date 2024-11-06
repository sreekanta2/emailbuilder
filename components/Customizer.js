"use client";
const Customizer = ({ selectedItem, onChange }) => {
  if (!selectedItem)
    return (
      <p className=" min-w-32 border border-slate-600 h-full p-6 rounded-md ">
        Select an item to customize
      </p>
    );

  return (
    <div className=" space-y-4 min-w-32 border border-slate-600 h-full p-6 rounded-md ">
      <h3>Customize {selectedItem.componentInfo.label}</h3>

      {/* Text value customization */}
      {selectedItem.componentInfo.type === "text" && (
        <div>
          <label>Text Value:</label>
          <input
            className="bg-slate-100 px-2 py-1 text-gray-500 focus:outline-slate-400 "
            type="text"
            value={selectedItem.componentInfo.value || ""}
            onChange={(e) =>
              onChange(selectedItem.pk, "componentInfo.value", e.target.value)
            }
          />
        </div>
      )}

      {/* Image URL customization */}
      {selectedItem.componentInfo.type === "image" && (
        <div className="flex items-center gap-2">
          <label>Image URL:</label>
          <input
            type="text"
            className="bg-slate-100 px-2 py-1 text-gray-500 focus:outline-slate-400 "
            value={selectedItem.componentInfo.src || ""}
            onChange={(e) =>
              onChange(selectedItem.pk, "componentInfo.src", e.target.value)
            }
          />
        </div>
      )}

      {/* Style customization */}
      <h5>Style Customizations:</h5>
      {Object.entries(selectedItem.componentInfo.attributes.style || {}).map(
        ([styleName, styleValue]) => (
          <div key={styleName} className="flex items-center gap-2">
            <label>
              {styleName.charAt(0).toUpperCase() + styleName.slice(1)}:
            </label>
            <input
              type="text"
              className="bg-slate-100 px-2 py-1 text-gray-500 focus:outline-slate-400 "
              value={styleValue || ""}
              onChange={(e) =>
                onChange(
                  selectedItem.pk,
                  `componentInfo.attributes.style.${styleName}`,
                  e.target.value
                )
              }
            />
          </div>
        )
      )}
    </div>
  );
};

export default Customizer;
