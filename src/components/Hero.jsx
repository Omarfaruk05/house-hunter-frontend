import bannerPhoto from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-[#fbf9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4">
          <div>
            <div className="">
              <h1 className="text-4xl font-serif font-bold mb-4">
                House Booking is near at hand.
              </h1>
              <p className="text-lg text-gray-500">
                A house is made of walls and beams; a home is built with love
                and dreams
              </p>
            </div>
            <div>
              <button className="btn btn-sm rounded-md text-white bg-teal-700 px-8 hover:bg-teal-800 mt-4">
                Free Registration
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={bannerPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
