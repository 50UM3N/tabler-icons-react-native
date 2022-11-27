import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconLineHeight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-line-height" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="3 8 6 5 9 8" /><Polyline points="3 16 6 19 9 16" /><Line x1={6} y1={5} x2={6} y2={19} /><Line x1={13} y1={6} x2={20} y2={6} /><Line x1={13} y1={12} x2={20} y2={12} /><Line x1={13} y1={18} x2={20} y2={18} /></Svg>;
}
export default IconLineHeight;