import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFrameOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-frame-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 7h3m4 0h9" /><Path d="M4 17h13" /><Path d="M7 7v13" /><Path d="M17 4v9m0 4v3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconFrameOff;