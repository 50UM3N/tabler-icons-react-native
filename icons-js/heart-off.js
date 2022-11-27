import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHeartOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M19.5 12.572l-1.5 1.428m-2 2l-4 4l-7.5 -7.428m0 0a5 5 0 0 1 -1.288 -5.068a4.976 4.976 0 0 1 1.788 -2.504m3 -1c1.56 .003 3.05 .727 4 2.006a5 5 0 1 1 7.5 6.572" /></Svg>;
}
export default IconHeartOff;