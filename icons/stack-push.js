import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconStackPush({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-push" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 10l-2 1l8 4l8 -4l-2 -1" /><Path d="M4 15l8 4l8 -4" /><Path d="M12 4v7" /><Path d="M15 8l-3 3l-3 -3" /></Svg>;
}
export default IconStackPush;