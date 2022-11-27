import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconBatteryAutomotive({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-battery-automotive" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={6} width={18} height={14} rx={2} /><Path d="M6 6v-2" /><Line x1={19} y1={4} x2={19} y2={6} /><Line x1={6.5} y1={13} x2={9.5} y2={13} /><Line x1={14.5} y1={13} x2={17.5} y2={13} /><Line x1={16} y1={11.5} x2={16} y2={14.5} /></Svg>;
}
export default IconBatteryAutomotive;