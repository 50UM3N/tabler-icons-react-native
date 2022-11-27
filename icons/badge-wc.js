import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBadgeWc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-wc" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M6.5 9l.5 6l2 -4l2 4l.5 -6" /><Path d="M17 10.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /></Svg>;
}
export default IconBadgeWc;