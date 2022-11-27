import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconAd({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ad" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M7 15v-4a2 2 0 0 1 4 0v4" /><Line x1={7} y1={13} x2={11} y2={13} /><Path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" /></Svg>;
}
export default IconAd;