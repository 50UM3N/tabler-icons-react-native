import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBusOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bus-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={17} r={2} /><Path d="M16.18 16.172a2 2 0 0 0 2.652 2.648" /><Path d="M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" /><Path d="M16 5l1.5 7h4.5" /><Path d="M2 10h8m4 0h3" /><Path d="M7 7v3" /><Path d="M12 5v3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBusOff;