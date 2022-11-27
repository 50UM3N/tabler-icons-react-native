import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconRadiusTopLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-radius-top-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 19v-6a8 8 0 0 1 8 -8h6" /></Svg>;
}
export default IconRadiusTopLeft;