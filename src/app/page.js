"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingModal from "./components/loadingModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("someTestValue", "12345");
    // set props data to session storage or local storage
    // if (sessionStorage.getItem("someTestValue")) {
    //   // Restore the contents of the text field
    //   tempValue = sessionStorage.getItem("someTestValue");
    // }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoadingModal isLoading={isLoading} />
      <div className="z-10 max-w-5xl w-full font-mono lg:flex">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[500px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-50 after:via-green-50 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-100 before:dark:opacity-10 after:dark:from-green-200 after:dark:via-[#005533] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#00000070] rounded-full hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/gg.png"
            alt=""
            width={150}
            height={150}
            priority
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
          href="/articles"
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
          href="/products"
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
          href="/contactus"
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
          href="/location"
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
