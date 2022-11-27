import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconNumber6({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-number-6" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16a4 4 0 1 0 8 0v-1a4 4 0 1 0 -8 0" /><Path d="M16 8a4 4 0 1 0 -8 0v8" /></Svg>;
}
export default IconNumber6;