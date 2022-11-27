import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconChartDots({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3v18h18" /><Circle cx={9} cy={9} r={2} /><Circle cx={19} cy={7} r={2} /><Circle cx={14} cy={15} r={2} /><Line x1={10.16} y1={10.62} x2={12.5} y2={13.5} /><Path d="M15.088 13.328l2.837 -4.586" /></Svg>;
}
export default IconChartDots;