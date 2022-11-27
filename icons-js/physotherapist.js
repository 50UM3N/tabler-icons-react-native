import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconPhysotherapist({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-physotherapist" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15l-1 -3l4 -2l4 1h3.5" /><Circle cx={4} cy={19} r={1} /><Circle cx={12} cy={6} r={1} /><Path d="M12 17v-7" /><Path d="M8 20h7l1 -4l4 -2" /><Path d="M18 20h3" /></Svg>;
}
export default IconPhysotherapist;