import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLanguageOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-language-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 5h1m4 0h2" /><Path d="M9 3v2m-.508 3.517c-.814 2.655 -2.52 4.483 -4.492 4.483" /><Path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" /><Path d="M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" /><Path d="M18 18h-5.1" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLanguageOff;