import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCrossOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cross-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconCrossOff;