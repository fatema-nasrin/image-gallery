import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TypeAnimation } from "react-type-animation";
import ReactiveButton from "reactive-button";
import "./GridImage.css";

// style for heading
const headingStyle = {
  position: "relative",
  fontSize: "24px",
  color: "#004225",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
};

// style for heading gradient border
const borderStyle = {
  content: '""',
  position: "absolute",
  width: "100%",
  height: "2px",
  background: "linear-gradient(to right, transparent, #005000, transparent)",
  bottom: "0",
  left: "0",
};

const GridImage = ({ images }) => {
  const [imageOrder, setImageOrder] = useState(images.map((image, index) => ({ ...image, order: index }))); // for re-ordering images
  const [selectedImages, setSelectedImages] = useState([]); // for select images
  const [deleteButtonState, setDeleteButtonState] = useState("idle"); // for delete button

  const handleDragEnd = (result) => {
    if (!result.destination) return;
  
    const reorderedImages = [...imageOrder];
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;
  
    const [movedImage] = reorderedImages.splice(sourceIndex, 1);
    reorderedImages.splice(destIndex, 0, movedImage);
  
    // Update the order property for each image
    reorderedImages.forEach((image, index) => {
      image.order = index;
    });
  
    setImageOrder(reorderedImages);
  };
  
  

  const handleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleDeleteSelectedImages = () => {
    setDeleteButtonState("loading");
    setTimeout(() => {
      const updatedImages = imageOrder.filter(
        (image) => !selectedImages.includes(image.id)
      );
      setImageOrder(updatedImages);
      setSelectedImages([]);
      setDeleteButtonState("success");
    }, 2000);
    setTimeout(() => {
      setDeleteButtonState("idle");
    }, 2000);
  };

  return (
    // style for main background
    <div
      style={{
        background: "linear-gradient(135deg, #708090, #ffffff)",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "50px",
      }}
      className="p-1 pt-8 md:p-20 h-auto"
    >
      {/* style for heading typing animation */}
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
        <div style={borderStyle}></div>
      </div>
      {/* main functionalities */}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6 sm:p-10">
          {imageOrder.map((image, index) => (
            <Droppable
              key={index}
              droppableId={`image-gallery-${index}`}
              direction="horizontal"
            >
              {(provided) => (
                <div
                  ref={(node) => provided.innerRef(node)}
                  className={`relative flex justify-center items-center ${
                    index === 0
                      ? "md:col-span-2 md:row-span-2"
                      : "md:col-span-1 md:row-span-1"
                  }`}
                >
                  {image.order === 11 ? (
  <div className="relative flex justify-center items-center  border-2 rounded-lg border-gray-500 border-dashed">
    <img
      src={image.url}
      alt={`Image ${index}`}
      className="rounded-lg p-20 sm:p-20 md:p-8 lg:p-16"
    />
  </div>
) : (
  <Draggable
    key={image.id}
    draggableId={image.id}
    index={index}
  >
    {(dragProvided) => (
      <div
        ref={dragProvided.innerRef}
        {...dragProvided.draggableProps}
        {...dragProvided.dragHandleProps}
        onClick={() => handleImageSelection(image.id)}
        style={{
          ...dragProvided.draggableProps.style,
          boxShadow: selectedImages.includes(image.id)
            ? "0 0 8px 2px #FF0000"
            : "0 0 8px 2px transparent",
        }}
        className="relative flex justify-center items-center"
      >
        <div
          className={` absolute border-2 rounded-lg border-gray-500 inset-0 z-10 hover:bg-black transition ease-in duration-200 opacity-30 ${
            selectedImages.includes(image.id)
              ? "hover-bg-transparent"
              : ""
          }`}
        ></div>
        <img
          src={image.url}
          alt={`Image ${index}`}
          className="rounded-lg"
        />
      </div>
    )}
  </Draggable>
)}

                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <div className="flex justify-between">
        <div>
          {selectedImages.length > 0 && (
            <p className="text-black font-bold md:text-2xl">
              Selected Files: {selectedImages.length}
            </p>
          )}
        </div>
        <div>
          {selectedImages.length > 0 && (
            <ReactiveButton
              buttonState={deleteButtonState}
              onClick={handleDeleteSelectedImages}
              className="text-white bg-lime-950 rounded-lg custom-button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GridImage;
