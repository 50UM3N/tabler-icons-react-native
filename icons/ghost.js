import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconGhost({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ghost" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" /><Line x1={10} y1={10} x2={10.01} y2={10} /><Line x1={14} y1={10} x2={14.01} y2={10} /><Path d="M10 14a3.5 3.5 0 0 0 4 0" /></Svg>;
}
export default IconGhost;