import Svg, { Path, Line, Polyline } from 'react-native-svg';
import * as React from "react";
function IconChartArea({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-area" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={19} x2={20} y2={19} /><Polyline points="4 15 8 9 12 11 16 6 20 10 20 15 4 15" /></Svg>;
}
export default IconChartArea;