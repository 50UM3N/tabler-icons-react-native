import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPlugOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plug-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159" /><Path d="M4 20l3.5 -3.5" /><Path d="M15 4l-3.5 3.5" /><Path d="M20 9l-3.5 3.5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconPlugOff;