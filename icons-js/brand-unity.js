import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandUnity({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-unity" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3l6 4v7" /><Path d="M18 17l-6 4l-6 -4" /><Path d="M4 14v-7l6 -4" /><Path d="M4 7l8 5v9" /><Path d="M20 7l-8 5" /></Svg>;
}
export default IconBrandUnity;