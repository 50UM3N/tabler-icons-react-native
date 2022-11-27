import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconEaseOutControlPoint({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ease-out-control-point" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21s10 -16 18 -16" /><Path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /><Path d="M7 5h2" /><Path d="M14 5h-2" /></Svg>;
}
export default IconEaseOutControlPoint;