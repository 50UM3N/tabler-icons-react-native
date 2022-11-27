import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMistOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mist-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5h9" /><Path d="M3 10h7" /><Path d="M18 10h1" /><Path d="M5 15h5" /><Path d="M14 15h1m4 0h2" /><Path d="M3 20h9m4 0h3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconMistOff;