import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconTable({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Line x1={4} y1={10} x2={20} y2={10} /><Line x1={10} y1={4} x2={10} y2={20} /></Svg>;
}
export default IconTable;