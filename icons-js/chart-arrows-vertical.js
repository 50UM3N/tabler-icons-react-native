import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconChartArrowsVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-arrows-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 21v-14" /><Path d="M9 15l3 -3l3 3" /><Path d="M15 10l3 -3l3 3" /><Line x1={3} y1={21} x2={21} y2={21} /><Line x1={12} y1={21} x2={12} y2={12} /><Path d="M3 6l3 -3l3 3" /><Path d="M6 21v-18" /></Svg>;
}
export default IconChartArrowsVertical;