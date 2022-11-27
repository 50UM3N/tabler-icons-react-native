import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBarbellOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barbell-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h1" /><Path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><Path d="M6.298 6.288a0.997 .997 0 0 0 -.298 .712v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-8" /><Path d="M9 12h3" /><Path d="M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523 -.11 .704 -.29m.296 -3.71v-7a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v4" /><Path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1" /><Path d="M22 12h-1" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBarbellOff;