import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconGauge({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gauge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={12} cy={12} r={1} /><Line x1={13.41} y1={10.59} x2={16} y2={8} /><Path d="M7 12a5 5 0 0 1 5 -5" /></Svg>;
}
export default IconGauge;