import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowMergeBoth({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-merge-both" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 8l-4 -4l-4 4" /><Path d="M12 20v-16" /><Path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" /><Path d="M6 18c4 -1.333 6 -4.667 6 -10" /></Svg>;
}
export default IconArrowMergeBoth;