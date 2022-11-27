import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFeatherOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-feather-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20l8 -8" /><Path d="M14 5v5h5" /><Path d="M9 11v4h4" /><Path d="M6 13v5h5" /><Path d="M6 13l3.502 -3.502m2.023 -2.023l2.475 -2.475" /><Path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1" /><Path d="M11 18l3.499 -3.499m2.008 -2.008l2.493 -2.493" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconFeatherOff;