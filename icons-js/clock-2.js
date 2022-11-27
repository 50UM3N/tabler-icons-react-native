import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconClock2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={1} /><Path d="M12 7v5l3 3" /><Path d="M4 12h1" /><Path d="M19 12h1" /><Path d="M12 19v1" /></Svg>;
}
export default IconClock2;