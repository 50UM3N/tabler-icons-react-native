import Svg, { Path, Polyline } from 'react-native-svg';
import * as React from "react";
function IconLayersDifference({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-difference" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" /><Polyline points="10 8 8 8 8 10" /><Polyline points="8 14 8 16 10 16" /><Polyline points="14 8 16 8 16 10" /><Polyline points="16 14 16 16 14 16" /></Svg>;
}
export default IconLayersDifference;