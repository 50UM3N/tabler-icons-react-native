import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconBorderOuter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-outer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Line x1={12} y1={8} x2={12} y2={8.01} /><Line x1={8} y1={12} x2={8} y2={12.01} /><Line x1={12} y1={12} x2={12} y2={12.01} /><Line x1={16} y1={12} x2={16} y2={12.01} /><Line x1={12} y1={16} x2={12} y2={16.01} /></Svg>;
}
export default IconBorderOuter;