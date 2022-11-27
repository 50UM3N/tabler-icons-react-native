import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconRadar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-radar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" /><Path d="M15.999 8.998a5 5 0 1 0 -6.999 7.003" /><Path d="M20.486 8.995a9 9 0 1 0 -11.482 11.495" /></Svg>;
}
export default IconRadar;