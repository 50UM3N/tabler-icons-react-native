import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircuitMotor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-motor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={7} /><Path d="M5 12h-3" /><Path d="M19 12h3" /><Path d="M10 14v-4l2 2l2 -2v4" /></Svg>;
}
export default IconCircuitMotor;