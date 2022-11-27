import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPlayCard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-play-card" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" /><Path d="M8 6h.01" /><Path d="M16 18h.01" /><Path d="M12 16l-3 -4l3 -4l3 4z" /></Svg>;
}
export default IconPlayCard;