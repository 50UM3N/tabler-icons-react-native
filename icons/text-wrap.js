import Svg, { Path, Line } from "react-native-svg";

function IconTextWrap({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-wrap" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={6} x2={20} y2={6} /><Line x1={4} y1={18} x2={9} y2={18} /><Path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" /></Svg>;
}

export default IconTextWrap;