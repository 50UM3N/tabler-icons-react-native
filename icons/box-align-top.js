import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBoxAlignTop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-align-top" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 9.505h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" /><Path d="M4 14.505v-.01" /><Path d="M4 19.505v-.01" /><Path d="M9 19.505v-.01" /><Path d="M15 19.505v-.01" /><Path d="M20 19.505v-.01" /><Path d="M20 14.505v-.01" /></Svg>;
}
export default IconBoxAlignTop;