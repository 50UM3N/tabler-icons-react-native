import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconCpu({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cpu" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={5} width={14} height={14} rx={1} /><Path d="M9 9h6v6h-6z" /><Path d="M3 10h2" /><Path d="M3 14h2" /><Path d="M10 3v2" /><Path d="M14 3v2" /><Path d="M21 10h-2" /><Path d="M21 14h-2" /><Path d="M14 21v-2" /><Path d="M10 21v-2" /></Svg>;
}
export default IconCpu;