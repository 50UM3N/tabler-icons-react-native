import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconTransform({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transform" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 13v.875c0 3.383 2.686 6.125 6 6.125" /><Circle cx={6} cy={6} r={3} /><Circle cx={18} cy={18} r={3} /><Path d="M16 9l2 2l2 -2" /><Path d="M18 10v-.875c0 -3.383 -2.686 -6.125 -6 -6.125" /><Path d="M3 15l2 -2l2 2" /></Svg>;
}
export default IconTransform;