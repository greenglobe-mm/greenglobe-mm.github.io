import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
    return <Suspense fallback={<Loading />}>
    <h1>Hello, Articles!</h1>
  </Suspense>
  }