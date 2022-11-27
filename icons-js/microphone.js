import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconMicrophone({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-microphone" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={9} y={2} width={6} height={11} rx={3} /><Path d="M5 10a7 7 0 0 0 14 0" /><Line x1={8} y1={21} x2={16} y2={21} /><Line x1={12} y1={17} x2={12} y2={21} /></Svg>;
}
export default IconMicrophone;