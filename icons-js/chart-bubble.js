import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconChartBubble({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-bubble" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={16} r={3} /><Circle cx={16} cy={19} r={2} /><Circle cx={14.5} cy={7.5} r={4.5} /></Svg>;
}
export default IconChartBubble;