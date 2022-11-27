import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBadge4k({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-4k" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M7 9v2a1 1 0 0 0 1 1h1" /><Path d="M10 9v6" /><Path d="M14 9v6" /><Path d="M17 9l-2 3l2 3" /><Path d="M15 12h-1" /></Svg>;
}
export default IconBadge4k;