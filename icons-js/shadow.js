import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconShadow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shadow" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M13 12h5" /><Path d="M13 15h4" /><Path d="M13 18h1" /><Path d="M13 9h4" /><Path d="M13 6h1" /></Svg>;
}
export default IconShadow;