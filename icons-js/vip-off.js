import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconVipOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vip-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5h2m4 0h12" /><Path d="M3 19h16" /><Path d="M4 9l2 6h1l2 -6" /><Path d="M12 12v3" /><Path d="M16 12v-3h2a2 2 0 1 1 0 4h-1" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconVipOff;