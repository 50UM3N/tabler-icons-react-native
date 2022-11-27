import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconChartGridDots({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-grid-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={18} cy={6} r={2} /><Circle cx={6} cy={12} r={2} /><Circle cx={6} cy={18} r={2} /><Circle cx={18} cy={18} r={2} /><Path d="M8 18h8" /><Path d="M18 20v1" /><Path d="M18 3v1" /><Path d="M6 20v1" /><Path d="M6 10v-7" /><Path d="M12 3v18" /><Path d="M18 8v8" /><Path d="M8 12h13" /><Path d="M21 6h-1" /><Path d="M16 6h-13" /><Path d="M3 12h1" /><Path d="M20 18h1" /><Path d="M3 18h1" /><Path d="M6 14v2" /></Svg>;
}
export default IconChartGridDots;