import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconInboxOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a1.994 1.994 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" /><Path d="M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconInboxOff;