import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconLuggage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-luggage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={6} width={12} height={14} rx={2} /><Path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" /><Path d="M6 10h12" /><Path d="M6 16h12" /><Path d="M9 20v1" /><Path d="M15 20v1" /></Svg>;
}
export default IconLuggage;