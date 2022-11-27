import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconBrightnessDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Line x1={12} y1={5} x2={12} y2={5.01} /><Line x1={17} y1={7} x2={17} y2={7.01} /><Line x1={19} y1={12} x2={19} y2={12.01} /><Line x1={17} y1={17} x2={17} y2={17.01} /><Line x1={12} y1={19} x2={12} y2={19.01} /><Line x1={7} y1={17} x2={7} y2={17.01} /><Line x1={5} y1={12} x2={5} y2={12.01} /><Line x1={7} y1={7} x2={7} y2={7.01} /></Svg>;
}
export default IconBrightnessDown;