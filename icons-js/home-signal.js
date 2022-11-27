import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHomeSignal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-signal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 22v-2" /><Path d="M18 22v-4" /><Path d="M21 22v-6" /><Path d="M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5" /></Svg>;
}
export default IconHomeSignal;