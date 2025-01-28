import { useEffect } from "react";

type Props = {};

export default function Homework({}: Props) {
  useEffect(() => {
    console.log("inside");
  }, []);
  return <div>Homework</div>;
}
