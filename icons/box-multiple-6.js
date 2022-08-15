import Svg, { Path, Rect, Circle } from "react-native-svg";

function IconBoxMultiple6({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-multiple-6" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={7} y={3} width={14} height={14} rx={2} /><Circle cx={14} cy={12} r={2} /><Path d="M16 8a2 2 0 1 0 -4 0v4" /><Path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /></Svg>;
}

export default IconBoxMultiple6;