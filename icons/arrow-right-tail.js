import Svg, { Path, Line } from "react-native-svg";

function IconArrowRightTail({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right-tail" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 15l3 -3l-3 -3" /><Path d="M3 15l3 -3l-3 -3" /><Line x1={6} y1={12} x2={21} y2={12} /></Svg>;
}

export default IconArrowRightTail;