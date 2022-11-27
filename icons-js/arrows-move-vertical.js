import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowsMoveVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-move-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 18l3 3l3 -3" /><Path d="M12 15v6" /><Path d="M15 6l-3 -3l-3 3" /><Path d="M12 3v6" /></Svg>;
}
export default IconArrowsMoveVertical;