import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowBearLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bear-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 3h-5v5" /><Path d="M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" /></Svg>;
}
export default IconArrowBearLeft;