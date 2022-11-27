import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBuildingBroadcastTower({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-broadcast-tower" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={1} /><Path d="M16.616 13.924a5 5 0 1 0 -9.23 .004" /><Path d="M20.307 15.469a9 9 0 1 0 -16.615 0" /><Path d="M9 21l3 -9l3 9" /><Path d="M10 19h4" /></Svg>;
}
export default IconBuildingBroadcastTower;