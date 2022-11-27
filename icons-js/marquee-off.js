import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMarqueeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-marquee-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" /><Path d="M9 4h1.5" /><Path d="M13.5 4h1.5" /><Path d="M18 4a2 2 0 0 1 2 2" /><Path d="M20 9v1.5" /><Path d="M20 13.5v1.5" /><Path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" /><Path d="M15 20h-1.5" /><Path d="M10.5 20h-1.5" /><Path d="M6 20a2 2 0 0 1 -2 -2" /><Path d="M4 15v-1.5" /><Path d="M4 10.5v-1.5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconMarqueeOff;