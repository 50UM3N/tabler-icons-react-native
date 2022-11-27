import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFileSymlink({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-symlink" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 21v-4a3 3 0 0 1 3 -3h5" /><Path d="M9 17l3 -3l-3 -3" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" /></Svg>;
}
export default IconFileSymlink;