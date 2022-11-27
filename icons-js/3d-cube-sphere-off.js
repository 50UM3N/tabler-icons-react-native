import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function Icon3dCubeSphereOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 17.6l-2 -1.1v-2.5" /><Path d="M4 10v-2.5l2 -1.1" /><Path d="M10 4.1l2 -1.1l2 1.1" /><Path d="M18 6.4l2 1.1v2.5" /><Path d="M20 14v2" /><Path d="M14 19.9l-2 1.1l-2 -1.1" /><Path d="M18 8.6l2 -1.1" /><Path d="M12 12v2.5" /><Path d="M12 18.5v2.5" /><Path d="M12 12l-2 -1.12" /><Path d="M6 8.6l-2 -1.1" /><Path d="M3 3l18 18" /></Svg>;
}
export default Icon3dCubeSphereOff;