import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPackages({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-packages" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" /><Path d="M2 13.5v5.5l5 3" /><Path d="M7 16.545l5 -3.03" /><Path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" /><Path d="M12 19l5 3" /><Path d="M17 16.5l5 -3" /><Path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" /><Path d="M7 5.03v5.455" /><Path d="M12 8l5 -3" /></Svg>;
}
export default IconPackages;