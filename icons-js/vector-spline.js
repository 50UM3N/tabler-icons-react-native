import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconVectorSpline({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-spline" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={17} y={3} width={4} height={4} rx={1} /><Rect x={3} y={17} width={4} height={4} rx={1} /><Path d="M17 5c-6.627 0 -12 5.373 -12 12" /></Svg>;
}
export default IconVectorSpline;