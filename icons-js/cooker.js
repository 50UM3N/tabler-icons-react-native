import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconCooker({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cooker" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 7h.01" /><Path d="M15 7h.01" /><Path d="M9 7h.01" /><Rect x={5} y={3} width={14} height={18} rx={2} /><Path d="M9 15h6" /><Path d="M5 11h14" /></Svg>;
}
export default IconCooker;