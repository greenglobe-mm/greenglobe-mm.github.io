"use client";
import { useEffect, useState } from "react";

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
      <h1>Hello, Contact Us!</h1>
    </main>
  );
}
