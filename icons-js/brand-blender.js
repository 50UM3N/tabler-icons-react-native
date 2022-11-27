import Svg, { Path, Ellipse, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandBlender({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-blender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Ellipse cx={15} cy={14} rx={6} ry={5} /><Circle cx={15} cy={14} r={1} /><Path d="M3 16l9 -6.5" /><Path d="M6 9h9" /><Path d="M13 5l5.65 5" /></Svg>;
}
export default IconBrandBlender;