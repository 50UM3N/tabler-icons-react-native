import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconHierarchy2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 3h4v4h-4z" /><Path d="M3 17h4v4h-4z" /><Path d="M17 17h4v4h-4z" /><Path d="M7 17l5 -4l5 4" /><Line x1={12} y1={7} x2={12} y2={13} /></Svg>;
}
export default IconHierarchy2;