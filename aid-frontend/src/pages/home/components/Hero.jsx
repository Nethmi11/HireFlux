function Hero() {
  return (
    <section className="py-32 flex justify-center items-center rounded-xl shadow-sm shadow-gray-900 border-white hero">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Find your dream job
        </h1>
      </div>
    </section>
  );
}

export default Hero;
