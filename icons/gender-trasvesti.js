import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconGenderTrasvesti({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-trasvesti" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10z" /><Path d="M6 6l5.4 5.4" /><Path d="M4 8l4 -4" /></Svg>;
}
export default IconGenderTrasvesti;