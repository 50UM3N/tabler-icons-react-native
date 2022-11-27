import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHammerOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hammer-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.698 10.72l-6.668 6.698a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l6.696 -6.676" /><Path d="M18.713 14.702l1.994 -1.995a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-1.999 1.999" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconHammerOff;