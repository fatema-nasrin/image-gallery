import GridImage from "./GridImage";

const ImageGallery = () => {
  const images = [
    "https://i.ibb.co/bmCzn2P/image-1.webp",
    
    "https://i.ibb.co/XWXD6cS/image-2.webp",

    "https://i.ibb.co/Nx3VwjK/image-3.webp",

    "https://i.ibb.co/ZY52vsM/image-4.webp",

    "https://i.ibb.co/4SdcmMb/image-5.webp",

    "https://i.ibb.co/2srYwFb/image-6.webp",

    "https://i.ibb.co/D4VHdbS/image-7.webp",

    "https://i.ibb.co/XyQYMLP/image-8.webp",

    "https://i.ibb.co/JHKcH8x/image-9.webp",

    "https://i.ibb.co/jJ5WX5v/image-10.jpg",

    "https://i.ibb.co/JqdqNN4/image-11.jpg",
    
    "/src/assets/icons8-image.gif"
  ];
  return <GridImage images={images} /> ;
};

export default ImageGallery;
