import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconNeedleThread({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-needle-thread" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918z" /><Path d="M17.5 6.5l-1 1" /><Path d="M17 7c-2.333 -2.667 -3.5 -4 -5 -4s-2 1 -2 2c0 4 8.161 8.406 6 11c-1.056 1.268 -3.363 1.285 -5.75 .808" /><Path d="M5.739 15.425c-1.393 -.565 -3.739 -1.925 -3.739 -3.425" /><Path d="M19.5 9.5l1.5 1.5" /></Svg>;
}
export default IconNeedleThread;