import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHomeEco({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-eco" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.002 11.002l-8.002 -8.002l-9 9h2v7a2 2 0 0 0 2 2h5" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" /><Path d="M16 22s0 -2 3 -4" /><Path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" /></Svg>;
}
export default IconHomeEco;