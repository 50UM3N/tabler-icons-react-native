import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconClipboardList({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><Rect x={9} y={3} width={6} height={4} rx={2} /><Line x1={9} y1={12} x2={9.01} y2={12} /><Line x1={13} y1={12} x2={15} y2={12} /><Line x1={9} y1={16} x2={9.01} y2={16} /><Line x1={13} y1={16} x2={15} y2={16} /></Svg>;
}
export default IconClipboardList;