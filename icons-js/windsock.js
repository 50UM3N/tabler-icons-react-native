import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconWindsock({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-windsock" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 3v18" /><Path d="M6 11l12 -1v-4l-12 -1" /><Path d="M10 5.5v5" /><Path d="M14 6v4" /><Path d="M4 21h4" /></Svg>;
}
export default IconWindsock;