import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconLockSquare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={8} y={11} width={8} height={5} rx={1} /><Path d="M10 11v-2a2 2 0 1 1 4 0v2" /><Rect x={4} y={4} width={16} height={16} rx={2} /></Svg>;
}
export default IconLockSquare;