import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconWiperWash({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wiper-wash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={20} r={1} /><Path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" /><Line x1={12} y1={20} x2={12} y2={6} /><Path d="M4 6a4 4 0 0 1 .4 -1.8" /><Path d="M7 2.1a4 4 0 0 1 2 0" /><Path d="M12 6a4 4 0 0 0 -.4 -1.8" /><Path d="M12 6a4 4 0 0 1 .4 -1.8" /><Path d="M15 2.1a4 4 0 0 1 2 0" /><Path d="M20 6a4 4 0 0 0 -.4 -1.8" /></Svg>;
}
export default IconWiperWash;