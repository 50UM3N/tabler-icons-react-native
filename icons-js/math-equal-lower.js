import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMathEqualLower({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-equal-lower" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 18l-14 -4" /><Path d="M19 14l-14 -4l14 -4" /></Svg>;
}
export default IconMathEqualLower;