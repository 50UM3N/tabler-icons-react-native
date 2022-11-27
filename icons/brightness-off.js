import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrightnessOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3v5m0 4v9" /><Path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" /><Path d="M12.5 8.5l4.15 -4.15" /><Path d="M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106" /><Path d="M12 19.6l3.79 -3.79m2.006 -2.006l3.054 -3.054" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBrightnessOff;