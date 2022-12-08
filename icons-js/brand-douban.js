import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandDouban({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-douban" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20h16" /><Path d="M5 4h14" /><Path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" /><Path d="M16 14l-2 6" /><Path d="M8 17l1 3" /></Svg>;
}
export default IconBrandDouban;