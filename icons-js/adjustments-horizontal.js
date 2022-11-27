import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconAdjustmentsHorizontal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={14} cy={6} r={2} /><Line x1={4} y1={6} x2={12} y2={6} /><Line x1={16} y1={6} x2={20} y2={6} /><Circle cx={8} cy={12} r={2} /><Line x1={4} y1={12} x2={6} y2={12} /><Line x1={10} y1={12} x2={20} y2={12} /><Circle cx={17} cy={18} r={2} /><Line x1={4} y1={18} x2={15} y2={18} /><Line x1={19} y1={18} x2={20} y2={18} /></Svg>;
}
export default IconAdjustmentsHorizontal;