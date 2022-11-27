import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconDeviceTvOld({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv-old" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={7} width={18} height={13} rx={2} /><Path d="M16 3l-4 4l-4 -4" /><Path d="M15 7v13" /><Path d="M18 15v.01" /><Path d="M18 12v.01" /></Svg>;
}
export default IconDeviceTvOld;