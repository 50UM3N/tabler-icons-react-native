import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconIceCream2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ice-cream-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17.657 11.004a6 6 0 1 0 -11.315 0" /><Path d="M6.342 11l5.658 11l5.657 -10.996z" /></Svg>;
}
export default IconIceCream2;