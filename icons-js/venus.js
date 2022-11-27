import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconVenus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-venus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={9} r={5} /><Line x1={12} y1={14} x2={12} y2={21} /><Line x1={9} y1={18} x2={15} y2={18} /></Svg>;
}
export default IconVenus;