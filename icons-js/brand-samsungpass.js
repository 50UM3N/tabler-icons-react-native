import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrandSamsungpass({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-samsungpass" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={10} width={16} height={11} rx={2} /><Path d="M7 10v-1.862c0 -2.838 2.239 -5.138 5 -5.138s5 2.3 5 5.138v1.862" /><Path d="M10.485 17.577c.337 .29 .7 .423 1.515 .423h.413c.323 0 .633 -.133 .862 -.368a1.27 1.27 0 0 0 .356 -.886c0 -.332 -.128 -.65 -.356 -.886a1.203 1.203 0 0 0 -.862 -.368h-.826a1.2 1.2 0 0 1 -.861 -.367a1.27 1.27 0 0 1 -.356 -.886c0 -.332 .128 -.651 .356 -.886a1.2 1.2 0 0 1 .861 -.368h.413c.816 0 1.178 .133 1.515 .423" /></Svg>;
}
export default IconBrandSamsungpass;