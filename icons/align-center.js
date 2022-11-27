import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconAlignCenter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-center" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={6} x2={20} y2={6} /><Line x1={8} y1={12} x2={16} y2={12} /><Line x1={6} y1={18} x2={18} y2={18} /></Svg>;
}
export default IconAlignCenter;