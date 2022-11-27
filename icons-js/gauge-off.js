import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconGaugeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gauge-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.038 16.052a9 9 0 0 0 -12.067 -12.102m-2.333 1.686a9 9 0 1 0 12.73 12.726" /><Path d="M11.283 11.303a1 1 0 0 0 1.419 1.41" /><Path d="M14 10l2 -2" /><Path d="M7 12c0 -1.386 .564 -2.64 1.475 -3.546m2.619 -1.372c.294 -.054 .597 -.082 .906 -.082" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconGaugeOff;