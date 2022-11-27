import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMoodNerd({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-nerd" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={8} cy={10} r={2} /><Circle cx={16} cy={10} r={2} /><Path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><Path d="M3.5 9h2.5" /><Path d="M18 9h2.5" /><Path d="M10 9.5c1.333 -1.333 2.667 -1.333 4 0" /></Svg>;
}
export default IconMoodNerd;