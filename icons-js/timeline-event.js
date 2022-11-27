import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconTimelineEvent({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-timeline-event" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={18} r={2} /><Path d="M10 18h-6" /><Path d="M14 18h6" /><Path d="M12 13l-2 -2h-3a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-3l-2 2z" /></Svg>;
}
export default IconTimelineEvent;