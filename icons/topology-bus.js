import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTopologyBus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-bus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M2 16h20" /><Path d="M4 12v4" /><Path d="M12 12v4" /><Path d="M20 12v4" /></Svg>;
}
export default IconTopologyBus;