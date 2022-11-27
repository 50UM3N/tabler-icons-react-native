import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconWashMachine({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wash-machine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={3} width={14} height={18} rx={2} /><Circle cx={12} cy={14} r={4} /><Path d="M8 6h.01" /><Path d="M11 6h.01" /><Path d="M14 6h2" /><Path d="M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0" /></Svg>;
}
export default IconWashMachine;