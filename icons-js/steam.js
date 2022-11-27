import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSteam({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-steam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={4} r={1} /><Circle cx={4} cy={12} r={1} /><Circle cx={20} cy={12} r={1} /><Circle cx={12} cy={20} r={1} /><Path d="M5.5 5.5l3 3" /><Path d="M15.5 15.5l3 3" /><Path d="M18.5 5.5l-3 3" /><Path d="M8.5 15.5l-3 3" /></Svg>;
}
export default IconSteam;