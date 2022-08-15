import Svg, { Path, Line } from "react-native-svg";

function IconIndentDecrease({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-indent-decrease" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={20} y1={6} x2={13} y2={6} /><Line x1={20} y1={12} x2={11} y2={12} /><Line x1={20} y1={18} x2={13} y2={18} /><Path d="M8 8l-4 4l4 4" /></Svg>;
}

export default IconIndentDecrease;