import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconWindOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24" /><Path d="M3 12h9" /><Path d="M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282" /><Path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconWindOff;