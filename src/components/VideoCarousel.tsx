const VideoCarousel = () => {
  const videos = [
    "https://res.cloudinary.com/dvxqb1wge/video/upload/v1769094373/Lifescc_hair_new_scr_4_e9efcz.mp4",
    "https://res.cloudinary.com/dvxqb1wge/video/upload/v1769095682/Lifescc_Hair_Solution_S3_1_ah1hak.mp4",
    "https://res.cloudinary.com/dvxqb1wge/video/upload/v1769095476/Lifescc_Hair_Solution_S1_1_pfyefn.mp4",
    "https://res.cloudinary.com/dvxqb1wge/video/upload/v1769095471/Lifescc_Hair_Solution_S2_1_kucnln.mp4"
  ];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-background">
      {/* Left Blur */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>

      {/* Right Blur */}
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...videos, ...videos].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-48 sm:w-56 md:w-72 lg:w-80 px-4">
            <video
              src={src}
              className="w-full h-auto object-contain rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
