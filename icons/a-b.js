import Svg, { Path, Line } from "react-native-svg";

function IconAB({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-a-b" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" /><Line x1={12} y1={6} x2={12} y2={18} /><Path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" /></Svg>;
}

export default IconAB;