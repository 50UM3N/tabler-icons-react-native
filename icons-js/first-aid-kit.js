import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconFirstAidKit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-first-aid-kit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><Rect x={4} y={8} width={16} height={12} rx={2} /><Path d="M10 14h4" /><Path d="M12 12v4" /></Svg>;
}
export default IconFirstAidKit;