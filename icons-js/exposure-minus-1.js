import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconExposureMinus1({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exposure-minus-1" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h6" /><Path d="M18 19v-14l-4 4" /></Svg>;
}
export default IconExposureMinus1;