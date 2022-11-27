import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPng({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-png" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /><Path d="M3 16v-8h2a2 2 0 1 1 0 4h-2" /><Path d="M10 16v-8l4 8v-8" /></Svg>;
}
export default IconPng;