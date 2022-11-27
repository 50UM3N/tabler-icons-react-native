import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowsDiff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-diff" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 16h10" /><Path d="M11 16l4 4" /><Path d="M11 16l4 -4" /><Path d="M13 8h-10" /><Path d="M13 8l-4 4" /><Path d="M13 8l-4 -4" /></Svg>;
}
export default IconArrowsDiff;