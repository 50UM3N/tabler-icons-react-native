import Svg, { Path, Circle, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconSoccerField({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-soccer-field" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Path d="M3 9h3v6h-3z" /><Path d="M18 9h3v6h-3z" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Line x1={12} y1={5} x2={12} y2={19} /></Svg>;
}
export default IconSoccerField;