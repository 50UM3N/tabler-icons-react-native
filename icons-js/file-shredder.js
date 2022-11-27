import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconFileShredder({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-shredder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><Line x1={3} y1={12} x2={21} y2={12} /><Line x1={6} y1={16} x2={6} y2={18} /><Line x1={10} y1={16} x2={10} y2={22} /><Line x1={14} y1={16} x2={14} y2={18} /><Line x1={18} y1={16} x2={18} y2={20} /></Svg>;
}
export default IconFileShredder;