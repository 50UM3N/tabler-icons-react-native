import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconHierarchyOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={5} r={2} /><Circle cx={5} cy={19} r={2} /><Path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" /><Path d="M6.5 17.5l5.5 -4.5l5.5 4.5" /><Path d="M12 7v1m0 4v1" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconHierarchyOff;