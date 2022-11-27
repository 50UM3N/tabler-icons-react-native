import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconIdBadge({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id-badge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={3} width={14} height={18} rx={3} /><Circle cx={12} cy={13} r={2} /><Path d="M10 6h4" /><Path d="M9 18h6" /></Svg>;
}
export default IconIdBadge;