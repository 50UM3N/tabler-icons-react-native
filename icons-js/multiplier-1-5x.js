import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMultiplier15x({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-multiplier-1-5x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 16v-8l-2 2" /><Path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" /><Path d="M7 16v.01" /><Path d="M17 16l4 -4" /><Path d="M21 16l-4 -4" /></Svg>;
}
export default IconMultiplier15x;