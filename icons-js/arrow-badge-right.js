import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowBadgeRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 7h-6l4 5l-4 5h6l4 -5z" /></Svg>;
}
export default IconArrowBadgeRight;