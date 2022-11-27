import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconTransitionBottom({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transition-bottom" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" /><Rect x={3} y={3} width={18} height={6} rx={3} /><Path d="M12 9v8" /><Path d="M9 14l3 3l3 -3" /></Svg>;
}
export default IconTransitionBottom;