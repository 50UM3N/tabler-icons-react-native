import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLifebuoyOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.171 9.172a4 4 0 0 0 5.65 5.663m1.179 -2.835a4 4 0 0 0 -4 -4" /><Path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667 -2.301a9 9 0 0 0 -12.077 -12.1" /><Path d="M15 15l3.35 3.35" /><Path d="M9 15l-3.35 3.35" /><Path d="M5.65 5.65l3.35 3.35" /><Path d="M18.35 5.65l-3.35 3.35" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLifebuoyOff;