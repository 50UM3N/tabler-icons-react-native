import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconCpu2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cpu-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={5} width={14} height={14} rx={1} /><Path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" /><Path d="M3 10h2" /><Path d="M3 14h2" /><Path d="M10 3v2" /><Path d="M14 3v2" /><Path d="M21 10h-2" /><Path d="M21 14h-2" /><Path d="M14 21v-2" /><Path d="M10 21v-2" /></Svg>;
}
export default IconCpu2;