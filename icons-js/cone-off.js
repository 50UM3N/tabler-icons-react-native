import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconConeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cone-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18.305 18.305c-1.132 1.003 -3.53 1.695 -6.305 1.695c-3.866 0 -7 -1.343 -7 -3s3.134 -3 7 -3c.747 0 1.467 .05 2.142 .143" /><Path d="M17.07 13.054l-5.07 -9.054l-1.432 2.558m-1.439 2.569l-4.129 7.373v.5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconConeOff;