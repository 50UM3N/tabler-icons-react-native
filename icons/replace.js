import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconReplace({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-replace" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={6} height={6} rx={1} /><Rect x={15} y={15} width={6} height={6} rx={1} /><Path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" /><Path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" /></Svg>;
}
export default IconReplace;