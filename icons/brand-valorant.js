import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandValorant({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-valorant" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14.5 14h4.5l2 -2v-6z" /><Path d="M9 19h5l-11 -13v6z" /></Svg>;
}
export default IconBrandValorant;