import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrandDjango({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-django" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={18} height={18} rx={3} /><Path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" /><Path d="M16 7v.01" /><Path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414" /></Svg>;
}
export default IconBrandDjango;