import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBattery4({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-battery-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" /><Line x1={7} y1={10} x2={7} y2={14} /><Line x1={10} y1={10} x2={10} y2={14} /><Line x1={13} y1={10} x2={13} y2={14} /><Line x1={16} y1={10} x2={16} y2={14} /></Svg>;
}
export default IconBattery4;