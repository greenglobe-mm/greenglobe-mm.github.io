"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "../articles/loading";

export default function Page() {
  const [testValue, setTestValue] = useState("");

  useEffect(() => {
    // set props data to session storage or local storage
    if (sessionStorage.getItem("someTestValue")) {
      // Restore the contents of the text field
      setTestValue(sessionStorage.getItem("someTestValue"));
    }
  }, [testValue]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loading />}>
        <h1>This wil be detail view of an article... {testValue} ...</h1>
      </Suspense>
    </main>
  );
}
