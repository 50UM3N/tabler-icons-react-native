import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconPolaroid({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-polaroid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Line x1={4} y1={16} x2={20} y2={16} /><Path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" /><Path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" /><Line x1={14} y1={7} x2={14.01} y2={7} /></Svg>;
}
export default IconPolaroid;