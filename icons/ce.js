import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconCe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ce" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 4a8 8 0 1 0 0 16" /><Path d="M20 4a8 8 0 1 0 0 16" /><Line x1={12} y1={12} x2={20} y2={12} /></Svg>;
}
export default IconCe;