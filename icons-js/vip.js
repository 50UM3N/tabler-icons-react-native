import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconVip({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vip" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5h18" /><Path d="M3 19h18" /><Path d="M4 9l2 6h1l2 -6" /><Path d="M12 9v6" /><Path d="M16 15v-6h2a2 2 0 1 1 0 4h-2" /></Svg>;
}
export default IconVip;