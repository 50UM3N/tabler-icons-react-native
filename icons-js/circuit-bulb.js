import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircuitBulb({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-bulb" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h5" /><Path d="M17 12h5" /><Circle cx={12} cy={12} r={5} /><Path d="M8.5 8.5l7 7" /><Path d="M15.5 8.5l-7 7" /></Svg>;
}
export default IconCircuitBulb;