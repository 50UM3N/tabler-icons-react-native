import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconGlobe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-globe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={10} r={4} /><Path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" /><Line x1={12} y1={18} x2={12} y2={22} /><Line x1={8} y1={22} x2={16} y2={22} /></Svg>;
}
export default IconGlobe;