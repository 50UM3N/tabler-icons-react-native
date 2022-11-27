import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconWashDry3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wash-dry-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={18} height={18} rx={3} /><Circle cx={12} cy={12} r={6} /><Path d="M12 12h.01" /><Path d="M9 12h.01" /><Path d="M15 12h.01" /></Svg>;
}
export default IconWashDry3;