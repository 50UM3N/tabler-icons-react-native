import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconTemperatureFahrenheit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature-fahrenheit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={8} r={2} /><Line x1={13} y1={12} x2={18} y2={12} /><Path d="M20 6h-6a1 1 0 0 0 -1 1v11" /></Svg>;
}
export default IconTemperatureFahrenheit;