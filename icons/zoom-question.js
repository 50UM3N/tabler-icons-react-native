import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconZoomQuestion({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-question" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={10} cy={10} r={7} /><Path d="M21 21l-6 -6" /><Line x1={10} y1={13} x2={10} y2={13.01} /><Path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></Svg>;
}
export default IconZoomQuestion;