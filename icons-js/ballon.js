import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBallon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ballon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 8a2 2 0 0 0 -2 -2" /><Path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" /><Path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" /></Svg>;
}
export default IconBallon;