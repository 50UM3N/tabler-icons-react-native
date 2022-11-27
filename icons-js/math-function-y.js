import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMathFunctionY({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-function-y" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" /><Path d="M5 12h6" /><Path d="M15 12l3 5.063" /><Path d="M21 12l-4.8 9" /></Svg>;
}
export default IconMathFunctionY;