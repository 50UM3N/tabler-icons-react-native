import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconKarate({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-karate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={18} cy={4} r={1} /><Path d="M3 9l4.5 1l3 2.5" /><Path d="M13 21v-8l3 -5.5" /><Path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" /></Svg>;
}
export default IconKarate;