import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMathPiDivide2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-pi-divide-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" /><Path d="M5 12h14" /><Path d="M10 9v-6" /><Path d="M14 3v6" /><Path d="M15 3h-6" /></Svg>;
}
export default IconMathPiDivide2;