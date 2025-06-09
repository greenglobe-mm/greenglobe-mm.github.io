import React, { useEffect, useState, Suspense } from "react";
import Loading from "./Loading";

export default function Detail() {
  const [testValue, setTestValue] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("someTestValue")) {
      setTestValue(sessionStorage.getItem("someTestValue"));
    }
  }, [testValue]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loading />}>
        <h1>This will be detail view of an article... {testValue} ...</h1>
      </Suspense>
    </main>
  );
}
