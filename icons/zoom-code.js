import Svg, { Path, Circle } from "react-native-svg";

function IconZoomCode({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={10} cy={10} r={7} /><Path d="M21 21l-6 -6" /><Path d="M8 8l-2 2l2 2" /><Path d="M12 8l2 2l-2 2" /></Svg>;
}

export default IconZoomCode;