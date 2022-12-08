import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandStackshare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-stackshare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={19} cy={6} r={2} /><Circle cx={19} cy={18} r={2} /><Circle cx={5} cy={12} r={2} /><Path d="M7 12h3l3.5 6h3.5" /><Path d="M17 6h-3.5l-3.5 6" /></Svg>;
}
export default IconBrandStackshare;