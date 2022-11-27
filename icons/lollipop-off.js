import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLollipopOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lollipop-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416 -1.57a7 7 0 1 0 -9.884 -9.915" /><Path d="M21 10a3.5 3.5 0 0 0 -7 0" /><Path d="M12.71 12.715a3.5 3.5 0 0 1 -5.71 -2.715" /><Path d="M14 17c.838 0 1.607 -.294 2.209 -.785m1.291 -2.715a3.5 3.5 0 0 0 -3.5 -3.5" /><Path d="M14 3a3.5 3.5 0 0 0 -3.5 3.5" /><Path d="M3 21l6 -6" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLollipopOff;