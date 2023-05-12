import { useQuery } from "react-query";
import { getChallengers } from "../logics/TestAPI";

export default function TestReactQueryComp() {
  const { status, data, error } = useQuery<any, Error>(
    "challengers",
    () => getChallengers()
  );

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return <div>success</div>;
}


