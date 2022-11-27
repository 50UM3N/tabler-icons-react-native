import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowRampRight3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-ramp-right-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 3v6" /><Path d="M16 16l4 -4l-4 -4" /><Path d="M6 21v-6a3 3 0 0 1 3 -3h11" /></Svg>;
}
export default IconArrowRampRight3;