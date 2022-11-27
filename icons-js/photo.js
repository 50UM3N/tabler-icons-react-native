import Svg, { Path, Line, Rect } from 'react-native-svg';
import * as React from "react";
function IconPhoto({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={15} y1={8} x2={15.01} y2={8} /><Rect x={4} y={4} width={16} height={16} rx={3} /><Path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" /><Path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" /></Svg>;
}
export default IconPhoto;