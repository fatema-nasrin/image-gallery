const GridImage = ({ images }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #708090, #ffffff)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin:"20px"
      }}
    >
      <div>
        <h1>Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-10">
        {images &&
          images.map((imageUrl, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : "sm:col-span-1 sm:row-span-1"
              } flex items-center justify-center `}
            >
              <div
                style={{
                  borderRadius: "10px",
                  border: index === 11 ? "2px dashed " : "none",
                }}
                className={`absolute inset-0 ${index !== 11 ? "transition duration-200 ease-in hover:bg-blue-950 opacity-30" : ""}`}
              ></div>

              <img
                src={imageUrl}
                style={{ borderRadius: "10px" }}
                className={
                  `w-full h-auto  ${index === 11 ? "sm:w-1/2 md:w-1/4" : ""} ` &&
                  `${
                    index === 11 ? "p-0 py-20 sm:p-0 md:p-0 border-none" : ""
                  } border-2 border-slate-400`
                }
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridImage;
