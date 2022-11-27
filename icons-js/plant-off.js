import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPlantOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plant-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4h8" /><Path d="M11.9 7.908a6.006 6.006 0 0 0 -4.79 -4.806m-4.11 -.102v2a6 6 0 0 0 6 6h2" /><Path d="M12.531 8.528a6.001 6.001 0 0 1 5.469 -3.528h3v1a6.002 6.002 0 0 1 -5.037 5.923" /><Path d="M12 15v-3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconPlantOff;