import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandProducthunt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-producthunt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" /><Circle cx={12} cy={12} r={9} /></Svg>;
}
export default IconBrandProducthunt;