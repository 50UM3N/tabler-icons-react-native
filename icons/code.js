import Svg, { Path, Polyline, Line } from "react-native-svg";

function IconCode({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 8 3 12 7 16" /><Polyline points="17 8 21 12 17 16" /><Line x1={14} y1={4} x2={10} y2={20} /></Svg>;
}

export default IconCode;