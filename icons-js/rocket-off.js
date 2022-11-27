import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconRocketOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rocket-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.29 9.275a9.03 9.03 0 0 0 -.29 .725a6 6 0 0 0 -5 3a8 8 0 0 1 7 7a6 6 0 0 0 3 -5c.241 -.085 .478 -.18 .708 -.283m2.428 -1.61a8.998 8.998 0 0 0 2.864 -6.107a3 3 0 0 0 -3 -3a8.998 8.998 0 0 0 -6.107 2.864" /><Path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><Circle cx={15} cy={9} r={1} /><Path d="M3 3l18 18" /></Svg>;
}
export default IconRocketOff;