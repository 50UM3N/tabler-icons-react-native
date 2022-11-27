import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandGatsby({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-gatsby" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3.296 14.297l6.407 6.407a9.018 9.018 0 0 1 -6.325 -6.116l-.082 -.291z" /><Path d="M16 13h5c-.41 3.603 -3.007 6.59 -6.386 7.614l-11.228 -11.229a9.004 9.004 0 0 1 15.66 -2.985" /></Svg>;
}
export default IconBrandGatsby;