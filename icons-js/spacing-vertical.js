import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSpacingVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-spacing-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" /><Path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><Path d="M16 12h-8" /></Svg>;
}
export default IconSpacingVertical;