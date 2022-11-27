import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBounceRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bounce-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 15.5c3 -1 5.5 -.5 8 4.5c.5 -3 1.5 -5.5 3 -8" /><Path d="M18 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" /></Svg>;
}
export default IconBounceRight;