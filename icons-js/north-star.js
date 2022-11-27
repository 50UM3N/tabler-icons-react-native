import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconNorthStar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-north-star" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h18" /><Path d="M12 21v-18" /><Path d="M7.5 7.5l9 9" /><Path d="M7.5 16.5l9 -9" /></Svg>;
}
export default IconNorthStar;