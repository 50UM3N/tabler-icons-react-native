import Svg, { Path, Line, Polyline } from 'react-native-svg';
import * as React from "react";
function IconSeparatorHorizontal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-separator-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={12} x2={20} y2={12} /><Polyline points="8 8 12 4 16 8" /><Polyline points="16 16 12 20 8 16" /></Svg>;
}
export default IconSeparatorHorizontal;