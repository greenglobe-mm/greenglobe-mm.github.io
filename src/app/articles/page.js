"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";
import articleInfo from "../../../resources/articleInfo";
import categories from "../../../resources/categories";
import Image from "next/image";

export default function Page() {
  const [testValue, setTestValue] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const numberOfPage = articleInfo.numberOfFiles;
    setArticles(categories);
  }, []);

  useEffect(() => {
    // set props data to session storage or local storage
    if (sessionStorage.getItem("someTestValue")) {
      // Restore the contents of the text field
      setTestValue(sessionStorage.getItem("someTestValue"));
    }
  }, [testValue]);

  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-red-400">
      <div className="z-10 w-full font-mono lg:flex mb-3">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[500px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-50 after:via-green-50 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-100 before:dark:opacity-10 after:dark:from-green-200 after:dark:via-[#005533] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#00000070] rounded-full hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/gg.png"
            alt=""
            width={210}
            height={210}
            priority
          />
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-8 w-full justify-around">
          {categories.map((item, index) => (
            <Link href="/detail" class="mx-auto max-w-2xl p-2" key={index}>
              <p class="flex justify-center">
                <Image
                  src={item.image}
                  alt="{company.name}"
                  className="w-36 h-36"
                  width={144}
                  height={144}
                />
              </p>
              <div className="flex">
                <p className="w-36 text-xl text-center text-slate-700 bg-yellow-400">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
    </main>
  );
}
