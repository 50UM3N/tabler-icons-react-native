import Svg, { Path, Line } from "react-native-svg";

function IconAlignRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={6} x2={20} y2={6} /><Line x1={10} y1={12} x2={20} y2={12} /><Line x1={6} y1={18} x2={20} y2={18} /></Svg>;
}

export default IconAlignRight;