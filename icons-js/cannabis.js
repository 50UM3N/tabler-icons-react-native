import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCannabis({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cannabis" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 20s0 -2 1 -3.5c-1.5 0 -2 -.5 -4 -1.5c0 0 1.839 -1.38 5 -1c-1.789 -.97 -3.279 -2.03 -5 -6c0 0 3.98 -.3 6.5 3.5c-2.284 -4.9 1.5 -9.5 1.5 -9.5c2.734 5.47 2.389 7.5 1.5 9.5c2.531 -3.77 6.5 -3.5 6.5 -3.5c-1.721 3.97 -3.211 5.03 -5 6c3.161 -.38 5 1 5 1c-2 1 -2.5 1.5 -4 1.5c1 1.5 1 3.5 1 3.5c-2 0 -4.438 -2.22 -5 -3c-.563 .78 -3 3 -5 3z" /><Path d="M12 22v-5" /></Svg>;
}
export default IconCannabis;