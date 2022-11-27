import Svg, { Path, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconTax({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg className="icon icon-tabler icon-tabler-tax" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={9} y1={14} x2={15} y2={8} /><Circle cx={9.5} cy={8.5} r={0.5} fill="currentColor" /><Circle cx={14.5} cy={13.5} r={0.5} fill="currentColor" /><Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /></Svg>;
}
export default IconTax;