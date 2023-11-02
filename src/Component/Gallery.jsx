const images = [
    {
        "id":"1",
        "image":"https://i.ibb.co/bmCzn2P/image-1.webp"
    },
    {
        "id":"2",
        "image":"https://i.ibb.co/XWXD6cS/image-2.webp"
    },
    {
        "id":"3",
        "image":"https://i.ibb.co/Nx3VwjK/image-3.webp"
    },
    {
        "id":"4",
        "image":"https://i.ibb.co/ZY52vsM/image-4.webp"
    },
    {
        "id":"5",
        "image":"https://i.ibb.co/4SdcmMb/image-5.webp"
    },
    {
        "id":"6",
        "image":"https://i.ibb.co/2srYwFb/image-6.webp"
    },
    {
        "id":"7",
        "image":"https://i.ibb.co/D4VHdbS/image-7.webp"
    },
    {
        "id":"8",
        "image":"https://i.ibb.co/XyQYMLP/image-8.webp"
    },
    {
        "id":"9",
        "image":"https://i.ibb.co/JHKcH8x/image-9.webp"
    },
    {
        "id":"10",
        "image":"https://i.ibb.co/jJ5WX5v/image-10.jpg"
    },
    {
        "id":"11",
        "image":"https://i.ibb.co/JqdqNN4/image-11.jpg"
    },
]

const Gallery = () => {
    return (
        <div className="bg-slate-300 m-6 p-4 rounded-md">
        <div className="border-b-2 border-slate-400 font-mono font-bold text-black text-2xl">
          <h1>Gallery</h1>
        </div>
        <div className="flex justify-evenly p-8">
          <div className="cardBox h-96 w-96 border-2 rounded-xl border-gray-400">
            <div className="card">
              <img
                className="rounded-xl"
                src="/src/assets/images/image-1.webp"
                alt="Headphone"
              />
              <div className="content">
                 </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="w-48 image-full border-2 rounded-xl border-gray-400">
              <div className="mini-card">
                <img
                  className="rounded-xl"
                  src="/src/assets/images/image-2.webp"
                  alt="Headphone"
                />
                <div className="content"></div>
              </div>
            </div>
            <div className="w-48 image-full border-2 rounded-xl border-gray-400">
              <div className="mini-card">
                <img
                  className="rounded-xl"
                  src="/src/assets/images/image-3.webp"
                  alt="Headphone"
                />
                <div className="content"></div>
              </div>
            </div>
            <div className="w-48 image-full border-2 rounded-xl border-gray-400">
              <div className="mini-card">
                <img
                  className="rounded-xl"
                  src="/src/assets/images/image-4.webp"
                  alt="Headphone"
                />
                <div className="content"></div>
              </div>
            </div>
            <div className="w-48 image-full border-2 rounded-xl border-gray-400">
              <div className="mini-card">
                <img
                  className="rounded-xl"
                  src="/src/assets/images/image-5.webp"
                  alt="Headphone"
                />
                <div className="content"></div>
              </div>
            </div>
            <div className="w-48 image-full border-2 rounded-xl border-gray-400">
              <div className="mini-card">
                <img
                  className="rounded-xl"
                  src="/src/assets/images/image-6.webp"
                  alt="Headphone"
                />
                <div className="content"></div>
              </div>
            </div>
            <div className="w-48 image-full border-2 rounded-xl border-gray-400">
              <div className="mini-card">
                <img
                  className="rounded-xl"
                  src="/src/assets/images/image-7.webp"
                  alt="Headphone"
                />
                <div className="content"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 w-auto gap-10 px-28">
          <div className="w-48 image-full border-2 rounded-xl border-gray-400">
            <div className="mini-card">
              <img
                className="rounded-xl"
                src="/src/assets/images/image-8.webp"
                alt="Headphone"
              />
              <div className="content"></div>
            </div>
          </div>
          <div className="w-48 image-full border-2 rounded-xl border-gray-400">
            <div className="mini-card">
              <img
                className="rounded-xl"
                src="/src/assets/images/image-9.webp"
                alt="Headphone"
              />
              <div className="content"></div>
            </div>
          </div>
          <div className="w-48 image-full border-2 rounded-xl border-gray-400">
            <div className="mini-card">
              <img
                className="rounded-xl"
                src="/src/assets/images/image-10.jpeg"
                alt="Headphone"
              />
              <div className="content"></div>
            </div>
          </div>
          <div className="w-48 image-full border-2 rounded-xl border-gray-400">
            <div className="mini-card">
              <img
                className="rounded-xl"
                src="/src/assets/images/image-11.jpeg"
                alt="Headphone"
              />
              <div className="content"></div>
            </div>
          </div>
          <div className="w-48 flex items-center justify-center image-full border-dashed border-2 rounded-xl border-gray-400">
            <div>
              <img className="p-4" src="/src/assets/icons8-image.gif" alt="" />
              <a className="text-black font-bold" href="">
                Add Images
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;