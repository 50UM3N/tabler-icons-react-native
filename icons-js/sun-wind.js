import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSunWind({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-wind" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14.468 10.005a4 4 0 1 0 -5.466 5.46" /><Path d="M2 12h1" /><Path d="M11 3v1" /><Path d="M11 20v1" /><Path d="M4.6 5.6l.7 .7" /><Path d="M17.4 5.6l-.7 .7" /><Path d="M5.3 17.7l-.7 .7" /><Path d="M15 13h5a2 2 0 1 0 0 -4" /><Path d="M12 16h5.714l.253 -.004a2.004 2.004 0 0 1 2.033 2.004a2 2 0 0 1 -2 2h-.286" /></Svg>;
}
export default IconSunWind;