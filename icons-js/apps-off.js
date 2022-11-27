import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconAppsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704a0.997 .997 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706" /><Path d="M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704a0.997 .997 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706" /><Rect x={4} y={14} width={6} height={6} rx={1} /><Path d="M14 7h6" /><Path d="M17 4v6" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAppsOff;