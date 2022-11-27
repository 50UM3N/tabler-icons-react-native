import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPrescription({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-prescription" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" /><Path d="M19 21l-9 -9" /><Path d="M13 21l6 -6" /></Svg>;
}
export default IconPrescription;