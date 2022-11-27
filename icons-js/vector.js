import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconVector({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={4} height={4} rx={1} /><Rect x={17} y={3} width={4} height={4} rx={1} /><Rect x={17} y={17} width={4} height={4} rx={1} /><Rect x={3} y={17} width={4} height={4} rx={1} /><Line x1={5} y1={7} x2={5} y2={17} /><Line x1={19} y1={7} x2={19} y2={17} /><Line x1={7} y1={5} x2={17} y2={5} /><Line x1={7} y1={19} x2={17} y2={19} /></Svg>;
}
export default IconVector;