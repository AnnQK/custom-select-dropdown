import { useInView } from "framer-motion";
import { generateColor } from "./generateColor";

function AnimateDiv() {
  const styleObj = {
    width: "100%",
    height: "100vh",
    backgroundColor: `#${generateColor()}`,
  };
  return <div style={styleObj}></div>;
}

export default AnimateDiv;
