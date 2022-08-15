import Svg, { Path, Circle } from "react-native-svg";

function IconZoomPan({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-pan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Path d="M17 17l-2.5 -2.5" /><Path d="M10 5l2 -2l2 2" /><Path d="M19 10l2 2l-2 2" /><Path d="M5 10l-2 2l2 2" /><Path d="M10 19l2 2l2 -2" /></Svg>;
}

export default IconZoomPan;