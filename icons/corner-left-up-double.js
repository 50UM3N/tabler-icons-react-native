import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCornerLeftUpDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-left-up-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" /><Path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" /></Svg>;
}
export default IconCornerLeftUpDouble;