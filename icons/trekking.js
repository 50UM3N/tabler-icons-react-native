import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconTrekking({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trekking" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={4} r={1} /><Path d="M7 21l2 -4" /><Path d="M13 21v-4l-3 -3l1 -6l3 4l3 2" /><Path d="M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2" /><Path d="M17 12v9" /><Path d="M16 20h2" /></Svg>;
}
export default IconTrekking;