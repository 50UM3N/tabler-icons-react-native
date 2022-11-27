import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconGenderGenderqueer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-genderqueer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" /><Path d="M12 11v-8" /><Path d="M14.5 4.5l-5 3" /><Path d="M9.5 4.5l5 3" /></Svg>;
}
export default IconGenderGenderqueer;