import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconZodiacScorpio({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-scorpio" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4a2 2 0 0 1 2 2v9" /><Path d="M5 6a2 2 0 0 1 4 0v9" /><Path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" /></Svg>;
}
export default IconZodiacScorpio;