const Home = () => {
  return (
    <div className="mx-auto grid md:grid-cols-3 gap-8 max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg flex-col"
      >
        <h3 className="text-lg font-semibold leading-5">Action Figures</h3>

        <p className="mt-4 text-sm leading-6 text-slate-700">
          Dive into a world of heroic adventures with our meticulously crafted
          action figures. Each figure captures the essence of your favorite
          characters with stunning detail and poseability.
        </p>
        <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
          <p className="flex text-sm font-semibold text-slate-500 items-center">
            <span>USD</span>
            <span className="ml-3 text-4xl text-slate-900">$19.99</span>
            <span className="ml-1.5">/Per Piece</span>
          </p>
        </div>
        <ul className="mt-6 space-y-4 flex-1">
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> 32
            Products
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Up to
            4,250 Sells
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Basic
            Products
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Shop Now
            and unleash the power of your imagination!
          </li>
        </ul>
        <a
          href=""
          className="mt-8 block rounded bg-cyan-500 px-6 py-4 text-center text-sm font-semibold leading-4 text-white shadow-md hover:bg-cyan-700"
        >
          Order your Toy
        </a>
      </div>
    </div>
  );
};

export default Home;
