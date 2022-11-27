import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSignLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sign-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 21h-4" /><Path d="M14 21v-10" /><Path d="M14 6v-3" /><Path d="M18 6h-10l-2 2.5l2 2.5h10z" /></Svg>;
}
export default IconSignLeft;