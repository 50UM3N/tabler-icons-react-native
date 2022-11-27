import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAspectRatioOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aspect-ratio-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" /><Path d="M7 12v-3h2" /><Path d="M17 12v1m-2 2h-1" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAspectRatioOff;