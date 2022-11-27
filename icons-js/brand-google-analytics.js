import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandGoogleAnalytics({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google-analytics" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={10} y={9} width={4} height={12} rx={1.105} /><Rect x={17} y={3} width={4} height={18} rx={1.105} /><Circle cx={5} cy={19} r={2} /></Svg>;
}
export default IconBrandGoogleAnalytics;