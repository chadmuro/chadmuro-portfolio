const Hero = ({ title }) => {
  return (
    <>
      <section className="w-full h-hero bg-hero-pattern bg-center bg-cover lg:bg-fixed absolute top-0 left-0">
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
        <h1 className="z-10 uppercase h-full text-5xl sm:text-6xl tracking-wider text-white flex justify-center items-center relative text-center">
          {title}
        </h1>
      </section>
      <div className="h-herorel relative" />
    </>
  );
};

export default Hero;
