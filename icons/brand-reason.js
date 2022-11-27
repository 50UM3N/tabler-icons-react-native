import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrandReason({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-reason" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={18} height={18} rx={2} /><Path d="M18 18h-3v-6h3" /><Path d="M18 15h-3" /><Path d="M8 18v-6h2.5a1.5 1.5 0 0 1 0 3h-2.5" /><Path d="M12 18l-2 -3" /></Svg>;
}
export default IconBrandReason;