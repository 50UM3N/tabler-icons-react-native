import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconSquareToggle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-toggle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={2} x2={12} y2={22} /><Path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" /><Path d="M20 6a2 2 0 0 0 -2 -2" /><Path d="M18 20a2 2 0 0 0 2 -2" /><Line x1={20} y1={10} x2={20} y2={14} /></Svg>;
}
export default IconSquareToggle;