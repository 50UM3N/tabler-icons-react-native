import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconPerfume({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-perfume" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 6v3" /><Path d="M14 6v3" /><Rect x={5} y={9} width={14} height={12} rx={2} /><Circle cx={12} cy={15} r={2} /><Path d="M9 3h6v3h-6z" /></Svg>;
}
export default IconPerfume;