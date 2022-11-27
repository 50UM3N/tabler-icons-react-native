import Svg, { Path, Circle, Line, Polyline } from 'react-native-svg';
import * as React from "react";
function IconInfoCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={12} y1={8} x2={12.01} y2={8} /><Polyline points="11 12 12 12 12 16 13 16" /></Svg>;
}
export default IconInfoCircle;