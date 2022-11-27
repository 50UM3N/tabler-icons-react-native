import Svg, { Path, Polyline, Rect } from 'react-native-svg';
import * as React from "react";
function IconHome2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="5 12 3 12 12 3 21 12 19 12" /><Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><Rect x={10} y={12} width={4} height={4} /></Svg>;
}
export default IconHome2;