import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TypeAnimation } from "react-type-animation";

const headingStyle = {
  position: "relative",
  fontSize: "24px",
  color: "#004225",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
};

const afterStyle = {
  content: '""',
  position: "absolute",
  width: "100%",
  height: "2px",
  background: "linear-gradient(to right, transparent, #005000, transparent)",
  bottom: "0",
  left: "0",
};

const GridImage = ({ images }) => {
  const [imageOrder, setImageOrder] = useState(images);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex !== 11 && destinationIndex !== 11) {
      const items = Array.from(imageOrder);
      const [reorderedItem] = items.splice(sourceIndex, 1);
      items.splice(destinationIndex, 0, reorderedItem);
      setImageOrder(items);
    }
  };
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #708090, #ffffff)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "20px",
      }}
    >
      <div style={headingStyle}>
        <h1>
          <TypeAnimation
            sequence={[
              "GA",
              500,
              "GALL",
              500,
              "GALLERY",
              500,
              "GALLE",
              500,
              "GA",
              500,
              "",
              500,
            ]}
            repeat={Infinity}
          />
        </h1>
        <div style={afterStyle}></div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-10"
            >
              {images.map((image, index) => (
              <Draggable key={image.id} draggableId={image.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      transition: snapshot.isDragging
                        ? 'transform 0.2s ease'
                        : 'inherit',
                    }}
                    className={`relative ${
                      index === 0
                        ? "sm:col-span-2 sm:row-span-2"
                        : "sm:col-span-1 sm:row-span-1"
                    } flex items-center justify-center `}
                  >
                    <div
                      
                    >
                      <img src={image.url}  className="w-1/2 h-1/2" />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GridImage;
