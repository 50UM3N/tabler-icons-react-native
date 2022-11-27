import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSunHigh({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-high" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" /><Path d="M6.343 17.657l-1.414 1.414" /><Path d="M6.343 6.343l-1.414 -1.414" /><Path d="M17.657 6.343l1.414 -1.414" /><Path d="M17.657 17.657l1.414 1.414" /><Path d="M4 12h-2" /><Path d="M12 4v-2" /><Path d="M20 12h2" /><Path d="M12 20v2" /></Svg>;
}
export default IconSunHigh;