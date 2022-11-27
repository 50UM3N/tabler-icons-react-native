import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSocialOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-social-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={5} r={2} /><Circle cx={5} cy={19} r={2} /><Path d="M17.57 17.602a2 2 0 0 0 2.83 2.827" /><Path d="M11.113 11.133a3.001 3.001 0 1 0 3.765 3.715" /><Path d="M12 7v1" /><Path d="M6.7 17.8l2.8 -2" /><Path d="M17.3 17.8l-2.8 -2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconSocialOff;