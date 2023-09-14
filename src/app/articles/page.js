import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loading />}>
        <h1>Hello, Articles!</h1>
      </Suspense>
    </main>
  );
}
