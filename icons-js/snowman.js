import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSnowman({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-snowman" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75z" /><Path d="M17.5 11.5l2.5 -1.5" /><Path d="M6.5 11.5l-2.5 -1.5" /><Path d="M12 13h.01" /><Path d="M12 16h.01" /></Svg>;
}
export default IconSnowman;