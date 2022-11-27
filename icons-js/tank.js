import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconTank({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tank" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={2} y={12} width={18} height={6} rx={3} /><Path d="M6 12l1 -5h5l3 5" /><Line x1={21} y1={9} x2={13.2} y2={9} /></Svg>;
}
export default IconTank;