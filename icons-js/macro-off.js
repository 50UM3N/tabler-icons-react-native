import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMacroOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-macro-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 15a6 6 0 0 0 11.47 2.467" /><Path d="M15.53 15.53a6.001 6.001 0 0 0 -3.53 5.47" /><Path d="M12 21a6 6 0 0 0 -6 -6" /><Path d="M12 21v-10" /><Path d="M10.866 10.87a5.007 5.007 0 0 1 -3.734 -3.723m-.132 -4.147l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -2.604 4.389" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconMacroOff;