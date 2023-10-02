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
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg flex-col"
      >
        <h3 className="text-lg font-semibold leading-5">Plush Toys</h3>
        <p className="absolute top-0 -translate-y-1/2 rounded-full bg-cyan-500 px-3 py-05 text-sm font-semibold tracking-wide text-white shadow-md">
          Most Popular
        </p>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          Experience cuddly companionship with our collection of irresistibly
          soft plush toys. These huggable friends are perfect for kids and
          collectors alike, adding warmth and charm to any space.
        </p>
        <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
          <p className="flex text-sm font-semibold text-slate-500 items-center">
            <span>USD</span>
            <span className="ml-3 text-4xl text-slate-900">$14.99</span>
            <span className="ml-1.5">/Per Piece</span>
          </p>
        </div>
        <ul className="mt-6 space-y-4 flex-1">
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> 14
            Products
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Up to
            12,000 Sells
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Advanced
            Products
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Browse
            Plush Collection and bring home a bundle of joy!
          </li>
        </ul>
        <a
          href=""
          className="mt-8 block rounded bg-cyan-500 px-6 py-4 text-center text-sm font-semibold leading-4 text-white shadow-md hover:bg-cyan-700"
        >
          Order your Toy
        </a>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg flex-col"
      >
        <h3 className="text-lg font-semibold leading-5">Construction Sets</h3>

        <p className="mt-4 text-sm leading-6 text-slate-700">
          Unleash your creativity with our captivating construction sets that
          challenge your building skills and imagination. On constructing
          vehicles or iconic scenes, the possibilities are endless.
        </p>
        <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
          <p className="flex text-sm font-semibold text-slate-500 items-center">
            <span>USD</span>
            <span className="ml-3 text-4xl text-slate-900">$29.99</span>
            <span className="ml-1.5">/Per Piece</span>
          </p>
        </div>
        <ul className="mt-6 space-y-4 flex-1">
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> 22
            Products
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Up to
            7,010 Sells
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Advanced
            Products
          </li>
          <li className="text-sm leading-6 text-slate-700">
            <span className="text-cyan-500 font-black">&#10003;</span> Explore
            Construction Sets and build your dreams!
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
