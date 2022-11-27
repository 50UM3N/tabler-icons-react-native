import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconReportSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" /><Path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" /><Rect x={8} y={3} width={6} height={4} rx={2} /><Path d="M8 11h4" /><Path d="M8 15h3" /><Circle cx={16.5} cy={17.5} r={2.5} /><Path d="M18.5 19.5l2.5 2.5" /></Svg>;
}
export default IconReportSearch;