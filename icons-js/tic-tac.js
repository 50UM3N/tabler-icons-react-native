import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconTicTac({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tic-tac" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={6} r={2} /><Path d="M3 12h18" /><Path d="M12 3v18" /><Path d="M4 16l4 4" /><Path d="M4 20l4 -4" /><Path d="M16 4l4 4" /><Path d="M16 8l4 -4" /><Circle cx={18} cy={18} r={2} /></Svg>;
}
export default IconTicTac;