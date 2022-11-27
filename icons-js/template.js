import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconTemplate({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-template" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={4} rx={1} /><Rect x={4} y={12} width={6} height={8} rx={1} /><Line x1={14} y1={12} x2={20} y2={12} /><Line x1={14} y1={16} x2={20} y2={16} /><Line x1={14} y1={20} x2={20} y2={20} /></Svg>;
}
export default IconTemplate;