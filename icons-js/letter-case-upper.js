import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLetterCaseUpper({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-case-upper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" /><Path d="M3 13h7" /><Path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" /><Path d="M14 13h7" /></Svg>;
}
export default IconLetterCaseUpper;