import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCrane({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crane" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 21h6" /><Path d="M9 21v-18l-6 6h18" /><Path d="M9 3l10 6" /><Path d="M17 9v4a2 2 0 1 1 -2 2" /></Svg>;
}
export default IconCrane;