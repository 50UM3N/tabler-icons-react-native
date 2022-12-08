import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandCitymapper({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-citymapper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" /><Path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" /><Path d="M8 12h8" /><Path d="M13 9l3 3l-3 3" /></Svg>;
}
export default IconBrandCitymapper;