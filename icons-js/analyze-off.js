import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAnalyzeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-analyze-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.086 8.086 0 0 0 -4.31 .62m-2.383 1.608a8.089 8.089 0 0 0 -1.326 1.69" /><Path d="M4 13a8.1 8.1 0 0 0 13.687 4.676" /><Path d="M20 16a1 1 0 0 0 -1 -1" /><Circle cx={5} cy={8} r={1} /><Path d="M9.888 9.87a3 3 0 1 0 4.233 4.252m.595 -3.397a3.012 3.012 0 0 0 -1.426 -1.435" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAnalyzeOff;