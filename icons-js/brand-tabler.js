import Svg, { Path, Line, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrandTabler({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tabler" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 9l3 3l-3 3" /><Line x1={13} y1={15} x2={16} y2={15} /><Rect x={4} y={4} width={16} height={16} rx={4} /></Svg>;
}
export default IconBrandTabler;