import Svg, { Path, Line, Polyline } from 'react-native-svg';
import * as React from "react";
function IconSeparatorVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-separator-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={4} x2={12} y2={20} /><Polyline points="8 8 4 12 8 16" /><Polyline points="16 16 20 12 16 8" /></Svg>;
}
export default IconSeparatorVertical;