import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTransitionRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transition-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><Path d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" /><Path d="M9 12h8" /><Path d="M14 15l3 -3l-3 -3" /></Svg>;
}
export default IconTransitionRight;