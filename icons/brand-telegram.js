import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandTelegram({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></Svg>;
}
export default IconBrandTelegram;