import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCandle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-candle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 21h6v-9a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1v9z" /><Path d="M12 3l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" /></Svg>;
}
export default IconCandle;