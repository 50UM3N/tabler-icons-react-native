import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandNpm({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-npm" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M1 8h22v7h-12v2h-4v-2h-6z" /><Path d="M7 8v7" /><Path d="M14 8v7" /><Path d="M17 11v4" /><Path d="M4 11v4" /><Path d="M11 11v1" /><Path d="M20 11v4" /></Svg>;
}
export default IconBrandNpm;