import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconIdBadgeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id-badge-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3.001 3.001 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" /><Path d="M11.179 11.176a2 2 0 1 0 2.635 2.667" /><Path d="M10 6h4" /><Path d="M9 18h6" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconIdBadgeOff;