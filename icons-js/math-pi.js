import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMathPi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-pi" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 20v-16" /><Path d="M17 4v16" /><Path d="M20 4h-16" /></Svg>;
}
export default IconMathPi;