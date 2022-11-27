import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconViewfinderOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-viewfinder-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" /><Path d="M12 3v4" /><Path d="M12 21v-3" /><Path d="M3 12h4" /><Path d="M21 12h-3" /><Path d="M12 12v.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconViewfinderOff;