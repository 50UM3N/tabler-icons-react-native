import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowBarRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={20} y1={12} x2={10} y2={12} /><Line x1={20} y1={12} x2={16} y2={16} /><Line x1={20} y1={12} x2={16} y2={8} /><Line x1={4} y1={4} x2={4} y2={20} /></Svg>;
}
export default IconArrowBarRight;