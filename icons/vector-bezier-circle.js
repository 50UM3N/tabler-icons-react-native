import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconVectorBezierCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-bezier-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={10} width={4} height={4} rx={1} /><Rect x={17} y={10} width={4} height={4} rx={1} /><Rect x={10} y={3} width={4} height={4} rx={1} /><Rect x={10} y={17} width={4} height={4} rx={1} /><Path d="M19 10a5 5 0 0 0 -5 -5" /><Path d="M19 14a5 5 0 0 1 -5 5" /><Path d="M5 14a5 5 0 0 0 5 5" /><Path d="M5 10a5 5 0 0 1 5 -5" /></Svg>;
}
export default IconVectorBezierCircle;