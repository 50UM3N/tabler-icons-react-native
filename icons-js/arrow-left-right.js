import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowLeftRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 13l4 -4l-4 -4" /><Path d="M7 13l-4 -4l4 -4" /><Path d="M12 14a5 5 0 0 1 5 -5h4" /><Path d="M12 19v-5a5 5 0 0 0 -5 -5h-4" /></Svg>;
}
export default IconArrowLeftRight;