import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconExternalLinkOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><Path d="M10 14l1.996 -1.996m2.007 -2.007l5.997 -5.997" /><Path d="M15 4h5v5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconExternalLinkOff;