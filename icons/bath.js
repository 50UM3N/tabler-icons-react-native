import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBath({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bath" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" /><Path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" /><Path d="M4 21l1 -1.5" /><Path d="M20 21l-1 -1.5" /></Svg>;
}
export default IconBath;