import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDoorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-door-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21h18" /><Path d="M6 21v-15" /><Path d="M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9" /><Path d="M18 18v3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDoorOff;