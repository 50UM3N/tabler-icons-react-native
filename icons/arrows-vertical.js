import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="8 7 12 3 16 7" /><Polyline points="8 17 12 21 16 17" /><Line x1={12} y1={3} x2={12} y2={21} /></Svg>;
}
export default IconArrowsVertical;