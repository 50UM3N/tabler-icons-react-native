import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconError404Off({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-error-404-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7v4a1 1 0 0 0 1 1h3" /><Path d="M7 7v10" /><Path d="M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2" /><Path d="M17 7v4a1 1 0 0 0 1 1h3" /><Path d="M21 7v10" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconError404Off;