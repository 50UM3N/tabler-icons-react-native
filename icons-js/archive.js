import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconArchive({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={4} width={18} height={4} rx={2} /><Path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" /><Line x1={10} y1={12} x2={14} y2={12} /></Svg>;
}
export default IconArchive;