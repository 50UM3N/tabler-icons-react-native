import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAntennaOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 4v8" /><Path d="M16 4.5v7" /><Path d="M12 5v3m0 4v9" /><Path d="M8 8v2.5" /><Path d="M4 6v4" /><Path d="M20 8h-8m-4 0h-4" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAntennaOff;