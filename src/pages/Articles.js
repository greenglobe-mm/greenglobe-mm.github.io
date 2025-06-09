import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import articleInfo from "../resources/articleInfo";
import categories from "../resources/categories";
import Loading from "./Loading";

export default function Articles() {
  const [testValue, setTestValue] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(categories);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("someTestValue")) {
      setTestValue(sessionStorage.getItem("someTestValue"));
    }
  }, [testValue]);

  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-red-400">
      <div className="z-10 w-full font-mono lg:flex mb-3">
        <div className="relative flex place-items-center">
          <img
            className="relative rounded-full"
            src="/gg.png"
            alt=""
            width={210}
            height={210}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-8 w-full justify-around">
          {categories.map((item, index) => (
            <Link to="/detail" className="mx-auto max-w-2xl p-2" key={index}>
              <p className="flex justify-center">
                <img
                  src={`/${item.image}`}
                  alt={item.title}
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
