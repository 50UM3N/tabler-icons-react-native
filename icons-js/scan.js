import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconScan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 7v-1a2 2 0 0 1 2 -2h2" /><Path d="M4 17v1a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v1" /><Path d="M16 20h2a2 2 0 0 0 2 -2v-1" /><Line x1={5} y1={12} x2={19} y2={12} /></Svg>;
}
export default IconScan;