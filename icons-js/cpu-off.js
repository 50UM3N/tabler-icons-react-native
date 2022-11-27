import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCpuOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cpu-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a0.997 .997 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" /><Path d="M13 9h2v2m0 4h-6v-6" /><Path d="M3 10h2" /><Path d="M3 14h2" /><Path d="M10 3v2" /><Path d="M14 3v2" /><Path d="M21 10h-2" /><Path d="M21 14h-2" /><Path d="M14 21v-2" /><Path d="M10 21v-2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconCpuOff;