import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBuilding({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={21} x2={21} y2={21} /><Line x1={9} y1={8} x2={10} y2={8} /><Line x1={9} y1={12} x2={10} y2={12} /><Line x1={9} y1={16} x2={10} y2={16} /><Line x1={14} y1={8} x2={15} y2={8} /><Line x1={14} y1={12} x2={15} y2={12} /><Line x1={14} y1={16} x2={15} y2={16} /><Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /></Svg>;
}
export default IconBuilding;