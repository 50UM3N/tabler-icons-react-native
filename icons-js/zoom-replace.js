import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconZoomReplace({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-replace" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 21l-6 -6" /><Path d="M3.291 8.003a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403" /><Path d="M17 4v4h-4" /><Path d="M16.705 12.005a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403" /><Path d="M3 16v-4h4" /></Svg>;
}
export default IconZoomReplace;