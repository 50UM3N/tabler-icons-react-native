import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconStairsUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stairs-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20h4v-4h4v-4h4v-4h4" /><Path d="M4 11l7 -7v4m-4 -4h4" /></Svg>;
}
export default IconStairsUp;