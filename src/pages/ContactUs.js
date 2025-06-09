import React, { useEffect, useState } from "react";

export default function ContactUs() {
  const [testValue, setTestValue] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("someTestValue")) {
      setTestValue(sessionStorage.getItem("someTestValue"));
    }
  }, [testValue]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, Contact Us!</h1>
    </main>
  );
}
