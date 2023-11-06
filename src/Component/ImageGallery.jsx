import GridImage from "./GridImage/GridImage";



const ImageGallery = () => {
  const images = [
    { id: "1", url: "https://i.ibb.co/bmCzn2P/image-1.webp" },
    { id: "2", url: "https://i.ibb.co/XWXD6cS/image-2.webp" },

    { id: "3", url: "https://i.ibb.co/Nx3VwjK/image-3.webp" },

    { id: "4", url: "https://i.ibb.co/ZY52vsM/image-4.webp" },

    { id: "5", url: "https://i.ibb.co/4SdcmMb/image-5.webp" },

    { id: "6", url: "https://i.ibb.co/2srYwFb/image-6.webp" },

    { id: "7", url: "https://i.ibb.co/D4VHdbS/image-7.webp" },

    { id: "8", url: "https://i.ibb.co/XyQYMLP/image-8.webp" },

    { id: "9", url: "https://i.ibb.co/JHKcH8x/image-9.webp" },

    { id: "10", url: "https://i.ibb.co/jJ5WX5v/image-10.jpg" },

    { id: "11", url: "https://i.ibb.co/JqdqNN4/image-11.jpg" },

    { id: "12", url: "/src/assets/icons8-image.gif" },
  ];
  return <GridImage images={images} />;
};

export default ImageGallery;
