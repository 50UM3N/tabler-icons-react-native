import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconFloatLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-float-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect width={6} height={6} x={4} y={5} rx={1} /><Line x1={14} y1={7} x2={20} y2={7} /><Line x1={14} y1={11} x2={20} y2={11} /><Line x1={4} y1={15} x2={20} y2={15} /><Line x1={4} y1={19} x2={20} y2={19} /></Svg>;
}
export default IconFloatLeft;