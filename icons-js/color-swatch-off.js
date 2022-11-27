import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconColorSwatchOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 13v4a4 4 0 0 0 6.832 2.825m1.168 -2.825v-12a2 2 0 0 0 -2 -2h-4a2 2 0 0 0 -2 2v4" /><Path d="M13 7.35l-2 -2a2 2 0 0 0 -2.11 -.461m-2.13 1.874l-1.416 1.415a2 2 0 0 0 0 2.828l9 9" /><Path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" /><Path d="M17 17v.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconColorSwatchOff;