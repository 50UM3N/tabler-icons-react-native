import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPassword({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-password" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10v4" /><Path d="M10 13l4 -2" /><Path d="M10 11l4 2" /><Path d="M5 10v4" /><Path d="M3 13l4 -2" /><Path d="M3 11l4 2" /><Path d="M19 10v4" /><Path d="M17 13l4 -2" /><Path d="M17 11l4 2" /></Svg>;
}
export default IconPassword;