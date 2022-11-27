import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconZodiacVirgo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-virgo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4a2 2 0 0 1 2 2v9" /><Path d="M5 6a2 2 0 0 1 4 0v9" /><Path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" /><Path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" /></Svg>;
}
export default IconZodiacVirgo;