import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAntennaBarsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna-bars-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 18v-3" /><Path d="M10 18v-6" /><Path d="M14 18v-4" /><Path d="M14 10v-1" /><Path d="M18 14v-8" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAntennaBarsOff;