import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconScubaMaskOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scuba-mask-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 7h5a1 1 0 0 1 1 1v4.5c0 .154 -.014 .304 -.04 .45m-1.997 2.007c-.15 .028 -.305 .043 -.463 .043h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1h3" /><Path d="M10 17a2 2 0 0 0 2 2h3.5a5.475 5.475 0 0 0 2.765 -.744m1.996 -2c.47 -.81 .739 -1.752 .739 -2.756v-9.5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconScubaMaskOff;