const CanvasComponent = ({ subcomponents, onSelect }) => {
  return (
    <div className=" flex flex-col gap-4 border-b border-gray-200 ">
      {subcomponents?.map((sub, i) => {
        return (
          <div key={i} className=" " style={{ fontWeight: "200px" }}>
            {sub.componentInfo.type === "text" && (
              <p
                style={sub.componentInfo.attributes.style}
                onClick={() => onSelect(sub)}
              >
                {sub.componentInfo.value}
              </p>
            )}
            {sub.componentInfo.type === "image" && (
              <img
                src={sub.componentInfo.src}
                alt={sub.componentInfo.alt}
                style={sub.componentInfo.attributes.style}
                onClick={() => onSelect(sub)}
              />
            )}
            {/* Add more types as needed */}
          </div>
        );
      })}
    </div>
  );
};

export default CanvasComponent;
