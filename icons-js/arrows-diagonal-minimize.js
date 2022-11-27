import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowsDiagonalMinimize({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-diagonal-minimize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 10h4v-4" /><Path d="M4 4l6 6" /><Path d="M18 14h-4v4" /><Path d="M14 14l6 6" /></Svg>;
}
export default IconArrowsDiagonalMinimize;