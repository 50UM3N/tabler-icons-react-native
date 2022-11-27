import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHexagonsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hexagons-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 18v-5l4 -2l4 2v5l-4 2z" /><Path d="M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5" /><Path d="M12 13l.661 -.331" /><Path d="M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconHexagonsOff;