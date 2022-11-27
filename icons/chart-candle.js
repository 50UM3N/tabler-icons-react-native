import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconChartCandle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-candle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={6} width={4} height={5} rx={1} /><Line x1={6} y1={4} x2={6} y2={6} /><Line x1={6} y1={11} x2={6} y2={20} /><Rect x={10} y={14} width={4} height={5} rx={1} /><Line x1={12} y1={4} x2={12} y2={14} /><Line x1={12} y1={19} x2={12} y2={20} /><Rect x={16} y={5} width={4} height={6} rx={1} /><Line x1={18} y1={4} x2={18} y2={5} /><Line x1={18} y1={11} x2={18} y2={20} /></Svg>;
}
export default IconChartCandle;