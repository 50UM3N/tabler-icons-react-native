import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconReplaceOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-replace-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717a0.997 .997 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714" /><Path d="M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717a0.997 .997 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714" /><Path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" /><Path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconReplaceOff;