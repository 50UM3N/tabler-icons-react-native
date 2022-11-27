import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDropletFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" /><Path d="M12 3v17" /><Path d="M12 12l3.544 -3.544" /><Path d="M12 17.3l5.558 -5.558" /></Svg>;
}
export default IconDropletFilled;