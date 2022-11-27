import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconScale({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scale" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={7} y1={20} x2={17} y2={20} /><Path d="M6 6l6 -1l6 1" /><Line x1={12} y1={3} x2={12} y2={20} /><Path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><Path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></Svg>;
}
export default IconScale;