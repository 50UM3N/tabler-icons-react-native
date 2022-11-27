import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconKeyboardShow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-keyboard-show" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={2} y={3} width={20} height={12} rx={2} /><Line x1={6} y1={7} x2={6} y2={7} /><Line x1={10} y1={7} x2={10} y2={7} /><Line x1={14} y1={7} x2={14} y2={7} /><Line x1={18} y1={7} x2={18} y2={7} /><Line x1={6} y1={11} x2={6} y2={11.01} /><Line x1={18} y1={11} x2={18} y2={11.01} /><Line x1={10} y1={11} x2={14} y2={11} /><Path d="M10 19l2 2l2 -2" /></Svg>;
}
export default IconKeyboardShow;