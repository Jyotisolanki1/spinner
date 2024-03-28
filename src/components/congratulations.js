
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "animate.css";

function Congrate() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <div></div>
      <br />
      <Confetti width={width} height={height} recycle={false} />
    </div>
  );
}
export default Congrate;
