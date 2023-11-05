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
  const [draggedImage, setDraggedImage] = useState(null);
  const dragImageRef = useRef(null);

  const handleDragStart = (index) => {
    const dragged = imageOrder[index];
    setDraggedImage(dragged);
    dragImageRef.current.style.width = `${dragImageRef.current.clientWidth}px`;
    dragImageRef.current.style.height = `${dragImageRef.current.clientHeight}px`;
  };

  const handleDragEnd = (index) => {
    if (draggedImage !== null) {
      const newImageOrder = [...imageOrder];
      newImageOrder[index] = draggedImage;
      setImageOrder(newImageOrder);
      setDraggedImage(null);
      dragImageRef.current.style.width = 'auto';
      dragImageRef.current.style.height = 'auto';
    }
  };
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #708090, #ffffff)",
        borderRadius: "10px",
        padding: "20px",
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
        <Droppable droppableId="image-gallery">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6 sm:p-10"
            >
              {imageOrder.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      key={image.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        transition: snapshot.isDragging
                        ? 'transform 0.2s ease'
                        : 'inherit',
                      }}
                      className={`${
                        index === 11 ? "pointer-events-none" : ""
                      } relative flex justify-center items-center ${
                        index === 0
                          ? "md:col-span-2 md:row-span-2"
                          : "lg:col-span-1 lg:row-span-1"
                      }`}
                    >
                      <div
                        className={`absolute border-2 rounded-lg border-gray-500 inset-0 z-10 hover:bg-black transition ease-in duration-200 opacity-30 ${
                          index === 11
                            ? "border-dashed hover:bg-transparent"
                            : ""
                        } `}
                      ></div>
                      <img
                        src={image.url}
                        className={`rounded-lg ${
                          index === 11 ? "py-24 sm:py-0 md:py-0 " : ""
                        }`}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
               <div
              className="absolute w-full h-full bg-transparent"
              style={{
                display: 'none', // Hide this element
              }}
            />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GridImage;
