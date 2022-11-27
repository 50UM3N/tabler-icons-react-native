import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconQrcodeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-qrcode-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h1a1 1 0 0 1 1 1v1m-.297 3.711a0.997 .997 0 0 1 -.703 .289h-4a1 1 0 0 1 -1 -1v-4c0 -.275 .11 -.524 .29 -.705" /><Path d="M7 17v.01" /><Rect x={14} y={4} width={6} height={6} rx={1} /><Path d="M7 7v.01" /><Rect x={4} y={14} width={6} height={6} rx={1} /><Path d="M17 7v.01" /><Path d="M20 14v.01" /><Path d="M14 14v3" /><Path d="M14 20h3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconQrcodeOff;