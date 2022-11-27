import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMathXy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-xy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 9l3 5.063" /><Path d="M4 9l6 6" /><Path d="M4 15l6 -6" /><Path d="M20 9l-4.8 9" /></Svg>;
}
export default IconMathXy;