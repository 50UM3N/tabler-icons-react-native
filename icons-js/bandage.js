import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBandage({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bandage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={14} y1={12} x2={14} y2={12.01} /><Line x1={10} y1={12} x2={10} y2={12.01} /><Line x1={12} y1={10} x2={12} y2={10.01} /><Line x1={12} y1={14} x2={12} y2={14.01} /><Path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" /></Svg>;
}
export default IconBandage;