import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TypeAnimation } from "react-type-animation";
import ReactiveButton from "reactive-button";
import "./GridImage.css";

const headingStyle = {
  position: "relative",
  fontSize: "24px",
  color: "#004225",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
};

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
  const [imageOrder, setImageOrder] = useState(images);
  const [selectedImages, setSelectedImages] = useState([]);
  const [deleteButtonState, setDeleteButtonState] = useState("idle");

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = [...imageOrder];
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

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
    <div
      style={{
        background: "linear-gradient(135deg, #708090, #ffffff)",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "50px",
      }}
      className="p-1 pt-8 md:p-20 h-auto"
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
        <div style={borderStyle}></div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="image-gallery" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6 sm:p-10"
            >
              {imageOrder.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => handleImageSelection(image.id)}
                      style={{
                        ...provided.draggableProps.style,
                        boxShadow: selectedImages.includes(image.id)
                          ? "0 0 8px 2px #FF0000"
                          : "0 0 8px 2px transparent",
                      }}
                      className={`${
                        index === 11 ? "pointer-events-none" : ""
                      } relative flex justify-center items-center ${
                        index === 0
                          ? "md:col-span-2 md:row-span-2"
                          : "md:col-span-1 md:row-span-1"
                      }`}
                    >
                      <div
                        className={`absolute border-2 rounded-lg border-gray-500 inset-0 z-10   hover:bg-black transition ease-in duration-200 opacity-30 ${
                          selectedImages.includes(image.id)
                            ? "hover-bg-transparent"
                            : ""
                        } && ${
                          index === 11
                            ? "bg-slate-400 opacity-20 border-dashed hover-bg-transparent"
                            : ""
                        } `}
                      ></div>
                      <img
                        src={image.url}
                        alt={`Image ${index}`}
                        className={`rounded-lg ${
                          index === 11 ? "py-24 sm:py-0 md:py-0" : ""
                        }`}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex justify-between">
        <div>
          {selectedImages.length > 0 && (
            <p className="text-black font-bold md:text-2xl">
              Number Of Selected image: {selectedImages.length}
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
