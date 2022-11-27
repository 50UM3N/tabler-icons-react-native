import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsHorizontal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 8 3 12 7 16" /><Polyline points="17 8 21 12 17 16" /><Line x1={3} y1={12} x2={21} y2={12} /></Svg>;
}
export default IconArrowsHorizontal;