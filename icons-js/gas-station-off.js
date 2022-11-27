import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconGasStationOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gas-station-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3" /><Path d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6" /><Path d="M3 20h12" /><Path d="M18 7v1a1 1 0 0 0 1 1h1" /><Path d="M4 11h7" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconGasStationOff;