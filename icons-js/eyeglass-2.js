import Svg, { Path, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconEyeglass2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eyeglass-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h-2l-3 10v2.5" /><Path d="M16 4h2l3 10v2.5" /><Line x1={10} y1={16} x2={14} y2={16} /><Circle cx={17.5} cy={16.5} r={3.5} /><Circle cx={6.5} cy={16.5} r={3.5} /></Svg>;
}
export default IconEyeglass2;