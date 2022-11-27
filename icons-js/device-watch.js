import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconDeviceWatch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-watch" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={6} width={12} height={12} rx={3} /><Path d="M9 18v3h6v-3" /><Path d="M9 6v-3h6v3" /></Svg>;
}
export default IconDeviceWatch;