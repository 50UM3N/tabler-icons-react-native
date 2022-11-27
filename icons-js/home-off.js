import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHomeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 12h-2l4.497 -4.497m1.999 -1.999l2.504 -2.504l9 9h-2" /><Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconHomeOff;