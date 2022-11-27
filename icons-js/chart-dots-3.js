import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconChartDots3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={7} r={2} /><Circle cx={16} cy={15} r={2} /><Circle cx={18} cy={6} r={3} /><Circle cx={6} cy={18} r={3} /><Path d="M9 17l5 -1.5" /><Path d="M6.5 8.5l7.81 5.37" /><Path d="M7 7l8 -1" /></Svg>;
}
export default IconChartDots3;