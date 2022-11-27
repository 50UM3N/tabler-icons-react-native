import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHomeCheck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><Path d="M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.525" /><Path d="M15 19l2 2l4 -4" /></Svg>;
}
export default IconHomeCheck;