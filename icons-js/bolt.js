import Svg, { Path, Polyline } from 'react-native-svg';
import * as React from "react";
function IconBolt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" /></Svg>;
}
export default IconBolt;