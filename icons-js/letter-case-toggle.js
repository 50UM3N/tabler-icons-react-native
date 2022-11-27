import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconLetterCaseToggle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-case-toggle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6.5} cy={15.5} r={3.5} /><Path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" /><Path d="M14 13h7" /><Path d="M10 12v7" /></Svg>;
}
export default IconLetterCaseToggle;