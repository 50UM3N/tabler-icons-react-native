import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsDiagonal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-diagonal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="16 4 20 4 20 8" /><Line x1={14} y1={10} x2={20} y2={4} /><Polyline points="8 20 4 20 4 16" /><Line x1={4} y1={20} x2={10} y2={14} /></Svg>;
}
export default IconArrowsDiagonal;