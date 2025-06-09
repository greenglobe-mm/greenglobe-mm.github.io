// Home.js - main landing page
import React, { useEffect, useState } from "react";
import LoadingModal from "../components/LoadingModal";
import { Link } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("someTestValue", "12345");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoadingModal isLoading={isLoading} />
      <div className="z-10 max-w-5xl w-full font-mono lg:flex">
        <div className="relative flex place-items-center">
          <img
            className="relative rounded-full"
            src="/gg.png"
            alt=""
            width={150}
            height={150}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <p className="relative self-end italic subpixel-antialiased hover:text-white text-stone-300 font-bold text-lg px-2">
          Make Your Grass Greener . . .
        </p>
      </div>
      <div className="max-w-5xl w-full">
        <p className="antialiased text-base font-medium indent-8 text-slate-100">
          Green Globe Company Limited was founded in 2022. Our company is still
          young but is up for the challenges. Green Globe Company Limited was
          founded in 2022. Our company is still young but is up for the
          challenges. Green Globe Company Limited was founded in 2022. Our
          company is still young but is up for the challenges. Green Globe
          Company Limited was founded in 2022. Our company is still young but is
          up for the challenges. Green Globe Company Limited was founded in
          2022. Our company is still young but is up for the challenges. Green
          Globe Company Limited was founded in 2022. Our company is still young
          but is up for the challenges.
        </p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          to="/articles"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Articles{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Read agricultural articles on plantation
          </p>
        </Link>
        <Link
          to="/products"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Products{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See our products and how to use
          </p>
        </Link>
        <Link
          to="/contactus"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Feel free to drop us a message
          </p>
        </Link>
        <Link
          to="/location"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Location{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Visit our farm
          </p>
        </Link>
      </div>
    </main>
  );
}
