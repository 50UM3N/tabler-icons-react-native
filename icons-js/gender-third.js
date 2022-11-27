import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconGenderThird({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-third" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z" /><Path d="M11 12h-3" /><Path d="M8 12l-5 -4v8z" /></Svg>;
}
export default IconGenderThird;