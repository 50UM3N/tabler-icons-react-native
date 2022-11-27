import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconWorldDownload({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-download" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 0 -9 9" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h8.4" /><Path d="M11.578 3a17 17 0 0 0 0 18" /><Path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" /><Path d="M18 14v7m-3 -3l3 3l3 -3" /></Svg>;
}
export default IconWorldDownload;