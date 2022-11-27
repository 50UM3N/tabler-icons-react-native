import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBellPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><Path d="M9 17v1a3 3 0 0 0 6 0v-1" /><Line x1={10} y1={11} x2={14} y2={11} /><Line x1={12} y1={9} x2={12} y2={13} /></Svg>;
}
export default IconBellPlus;