import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconNews({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" /><Line x1={8} y1={8} x2={12} y2={8} /><Line x1={8} y1={12} x2={12} y2={12} /><Line x1={8} y1={16} x2={12} y2={16} /></Svg>;
}
export default IconNews;