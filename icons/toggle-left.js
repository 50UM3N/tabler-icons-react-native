import Svg, { Path, Circle, Rect } from 'react-native-svg';
import * as React from "react";
function IconToggleLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-toggle-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={8} cy={12} r={2} /><Rect x={2} y={6} width={20} height={12} rx={6} /></Svg>;
}
export default IconToggleLeft;