import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconGrill({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grill" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 5.996 -5.775l.004 -.225z" /><Path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" /><Path d="M15 14l1 2" /><Path d="M9 14l-3 6" /><Path d="M15 18h-8" /><Path d="M15 5v-1" /><Path d="M12 5v-1" /><Path d="M9 5v-1" /></Svg>;
}
export default IconGrill;