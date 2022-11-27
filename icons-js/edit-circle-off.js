import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconEditCircleOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit-circle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.507 10.498l-1.507 1.502v3h3l1.493 -1.498m2.002 -2.01l4.89 -4.907a2.1 2.1 0 0 0 -2.97 -2.97l-4.913 4.896" /><Path d="M16 5l3 3" /><Path d="M7.476 7.471a7.002 7.002 0 0 0 2.524 13.529a7.004 7.004 0 0 0 6.53 -4.474" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconEditCircleOff;