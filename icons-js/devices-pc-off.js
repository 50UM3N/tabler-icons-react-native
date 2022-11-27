import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDevicesPcOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices-pc-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 9v10h-6v-14h2" /><Path d="M13 9h9v7h-2m-4 0h-4v-4" /><Path d="M14 19h5" /><Path d="M17 17v2" /><Path d="M6 13v.01" /><Path d="M6 16v.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDevicesPcOff;