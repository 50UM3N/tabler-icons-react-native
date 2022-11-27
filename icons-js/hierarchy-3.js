import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconHierarchy3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={5} r={2} /><Circle cx={8} cy={12} r={2} /><Circle cx={12} cy={19} r={2} /><Circle cx={20} cy={19} r={2} /><Circle cx={4} cy={19} r={2} /><Circle cx={16} cy={12} r={2} /><Path d="M5 17l2 -3" /><Path d="M9 10l2 -3" /><Path d="M13 7l2 3" /><Path d="M17 14l2 3" /><Path d="M15 14l-2 3" /><Path d="M9 14l2 3" /></Svg>;
}
export default IconHierarchy3;