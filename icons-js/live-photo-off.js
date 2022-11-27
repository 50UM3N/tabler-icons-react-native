import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLivePhotoOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-live-photo-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.296 11.29a1 1 0 1 0 1.414 1.415" /><Path d="M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851" /><Path d="M15.9 20.11v.01" /><Path d="M19.04 17.61v.01" /><Path d="M20.77 14v.01" /><Path d="M20.77 10v.01" /><Path d="M19.04 6.39v.01" /><Path d="M15.9 3.89v.01" /><Path d="M12 3v.01" /><Path d="M8.1 3.89v.01" /><Path d="M4.96 6.39v.01" /><Path d="M3.23 10v.01" /><Path d="M3.23 14v.01" /><Path d="M4.96 17.61v.01" /><Path d="M8.1 20.11v.01" /><Path d="M12 21v.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLivePhotoOff;