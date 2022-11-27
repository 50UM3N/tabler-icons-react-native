import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconIndentIncrease({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-indent-increase" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={20} y1={6} x2={9} y2={6} /><Line x1={20} y1={12} x2={13} y2={12} /><Line x1={20} y1={18} x2={9} y2={18} /><Path d="M4 8l4 4l-4 4" /></Svg>;
}
export default IconIndentIncrease;