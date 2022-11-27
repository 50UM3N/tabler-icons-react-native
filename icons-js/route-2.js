import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconRoute2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-route-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 17l4 4" /><Path d="M7 17l-4 4" /><Path d="M17 3l4 4" /><Path d="M21 3l-4 4" /><Path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" /></Svg>;
}
export default IconRoute2;