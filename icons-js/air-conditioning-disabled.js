import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconAirConditioningDisabled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-air-conditioning-disabled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={8} width={18} height={8} rx={2} /><Path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" /></Svg>;
}
export default IconAirConditioningDisabled;