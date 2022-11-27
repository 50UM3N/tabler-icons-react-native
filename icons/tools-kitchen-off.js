import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconToolsKitchenOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools-kitchen-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874" /><Path d="M7 18h2v3h-2z" /><Path d="M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1" /><Path d="M20 15v1m0 4v1h-1v-2" /><Path d="M8 12v6" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconToolsKitchenOff;