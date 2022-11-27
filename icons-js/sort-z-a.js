import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSortZA({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-z-a" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8h4l-4 8h4" /><Path d="M16 16v-6a2 2 0 1 1 4 0v6" /><Path d="M16 13h4" /><Path d="M11 12h2" /></Svg>;
}
export default IconSortZA;