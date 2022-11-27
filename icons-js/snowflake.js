import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSnowflake({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-snowflake" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 4l2 1l2 -1" /><Path d="M12 2v6.5l3 1.72" /><Path d="M17.928 6.268l.134 2.232l1.866 1.232" /><Path d="M20.66 7l-5.629 3.25l.01 3.458" /><Path d="M19.928 14.268l-1.866 1.232l-.134 2.232" /><Path d="M20.66 17l-5.629 -3.25l-2.99 1.738" /><Path d="M14 20l-2 -1l-2 1" /><Path d="M12 22v-6.5l-3 -1.72" /><Path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" /><Path d="M3.34 17l5.629 -3.25l-.01 -3.458" /><Path d="M4.072 9.732l1.866 -1.232l.134 -2.232" /><Path d="M3.34 7l5.629 3.25l2.99 -1.738" /></Svg>;
}
export default IconSnowflake;