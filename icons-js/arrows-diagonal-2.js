import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsDiagonal2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-diagonal-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="16 20 20 20 20 16" /><Line x1={14} y1={14} x2={20} y2={20} /><Polyline points="8 4 4 4 4 8" /><Line x1={4} y1={4} x2={10} y2={10} /></Svg>;
}
export default IconArrowsDiagonal2;