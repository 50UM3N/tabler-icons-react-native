import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconCalendarPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={5} width={16} height={16} rx={2} /><Line x1={16} y1={3} x2={16} y2={7} /><Line x1={8} y1={3} x2={8} y2={7} /><Line x1={4} y1={11} x2={20} y2={11} /><Line x1={10} y1={16} x2={14} y2={16} /><Line x1={12} y1={14} x2={12} y2={18} /></Svg>;
}
export default IconCalendarPlus;