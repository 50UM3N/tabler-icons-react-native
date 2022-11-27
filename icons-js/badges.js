import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBadges({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badges" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 17v-4l-5 3l-5 -3v4l5 3z" /><Path d="M17 8v-4l-5 3l-5 -3v4l5 3z" /></Svg>;
}
export default IconBadges;