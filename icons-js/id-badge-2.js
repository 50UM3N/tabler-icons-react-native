import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconIdBadge2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id-badge-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 12h3v4h-3z" /><Path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" /><Rect x={10} y={3} width={4} height={5} rx={1} /><Path d="M14 16h2" /><Path d="M14 12h4" /></Svg>;
}
export default IconIdBadge2;