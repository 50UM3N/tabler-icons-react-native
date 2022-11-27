import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAsterisk({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-asterisk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12l8 -4.5" /><Path d="M12 12v9" /><Path d="M12 12l-8 -4.5" /><Path d="M12 12l8 4.5" /><Path d="M12 3v9" /><Path d="M12 12l-8 4.5" /></Svg>;
}
export default IconAsterisk;