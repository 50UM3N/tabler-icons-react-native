import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconEPassport({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-e-passport" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={2} y={5} width={20} height={14} rx={1.999} /><Circle cx={12} cy={12} r={3} /><Path d="M9 12h-7" /><Path d="M15 12h7" /></Svg>;
}
export default IconEPassport;