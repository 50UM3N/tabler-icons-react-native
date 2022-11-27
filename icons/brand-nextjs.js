import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandNextjs({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-nextjs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" /><Path d="M15 12v-3" /></Svg>;
}
export default IconBrandNextjs;