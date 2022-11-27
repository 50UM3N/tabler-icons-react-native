import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSunMoon({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-moon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" /><Path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" /><Path d="M3 12h1" /><Path d="M12 3v1" /><Path d="M5.6 5.6l.7 .7" /><Path d="M3 21l18 -18" /></Svg>;
}
export default IconSunMoon;