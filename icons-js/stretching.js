import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconStretching({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stretching" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={16} cy={5} r={1} /><Path d="M5 20l5 -.5l1 -2" /><Path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" /></Svg>;
}
export default IconStretching;