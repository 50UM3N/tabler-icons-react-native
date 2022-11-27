import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDetailsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-details-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 19h14" /><Path d="M20.986 16.984a2.003 2.003 0 0 0 -.146 -.734l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.821 1.417m-1.469 2.534l-4.81 8.299a2 2 0 0 0 1.75 2.75" /><Path d="M12 3v5m0 4v7" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDetailsOff;