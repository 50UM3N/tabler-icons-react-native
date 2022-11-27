import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBadgeAr({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-ar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><Path d="M7 13h3" /><Path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" /></Svg>;
}
export default IconBadgeAr;