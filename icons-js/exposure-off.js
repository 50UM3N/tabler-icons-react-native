import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconExposureOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exposure-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.6 19.4l7.4 -7.4m2 -2l5.4 -5.4" /><Path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a1.994 1.994 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" /><Path d="M7 9h2m0 0v2" /><Path d="M13 16h3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconExposureOff;