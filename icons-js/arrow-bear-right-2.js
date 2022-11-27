import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowBearRight2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bear-right-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 3h5v5" /><Path d="M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" /><Path d="M4 5l4.5 4.5" /></Svg>;
}
export default IconArrowBearRight2;