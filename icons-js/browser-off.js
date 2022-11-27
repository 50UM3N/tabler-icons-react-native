import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrowserOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702a0.997 .997 0 0 1 -.712 .298h-14a1 1 0 0 1 -1 -1v-14c0 -.276 .112 -.526 .293 -.707" /><Path d="M4 8h4m4 0h8" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBrowserOff;