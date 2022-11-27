import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandVite({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vite" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" /><Path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" /></Svg>;
}
export default IconBrandVite;