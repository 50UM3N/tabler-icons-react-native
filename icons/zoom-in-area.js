import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconZoomInArea({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-in-area" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 13v4" /><Path d="M13 15h4" /><Circle cx={15} cy={15} r={5} /><Path d="M22 22l-3 -3" /><Path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" /><Path d="M3 11v-1" /><Path d="M3 6v-1a2 2 0 0 1 2 -2h1" /><Path d="M10 3h1" /><Path d="M15 3h1a2 2 0 0 1 2 2v1" /></Svg>;
}
export default IconZoomInArea;