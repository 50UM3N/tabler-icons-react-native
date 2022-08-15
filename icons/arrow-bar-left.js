import Svg, { Path, Line } from "react-native-svg";

function IconArrowBarLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={12} x2={14} y2={12} /><Line x1={4} y1={12} x2={8} y2={16} /><Line x1={4} y1={12} x2={8} y2={8} /><Line x1={20} y1={4} x2={20} y2={20} /></Svg>;
}

export default IconArrowBarLeft;