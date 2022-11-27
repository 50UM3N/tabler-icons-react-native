import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconServerBolt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-server-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={4} width={18} height={8} rx={3} /><Path d="M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12" /><Path d="M7 8v.01" /><Path d="M7 16v.01" /><Path d="M20 15l-2 3h3l-2 3" /></Svg>;
}
export default IconServerBolt;