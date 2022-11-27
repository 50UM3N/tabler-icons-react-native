import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconKeyboardOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-keyboard-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418" /><Line x1={6} y1={10} x2={6} y2={10.01} /><Line x1={10} y1={10} x2={10} y2={10.01} /><Line x1={14} y1={10} x2={14} y2={10.01} /><Line x1={18} y1={10} x2={18} y2={10.01} /><Line x1={6} y1={14} x2={6} y2={14.01} /><Line x1={18} y1={14} x2={18} y2={14.01} /><Line x1={10} y1={14} x2={14} y2={14} /><Line x1={3} y1={3} x2={21} y2={21} /></Svg>;
}
export default IconKeyboardOff;