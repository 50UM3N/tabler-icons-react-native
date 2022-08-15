import Svg, { Path, Polyline, Line } from "react-native-svg";

function IconArrowsMinimize({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-minimize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="5 9 9 9 9 5" /><Line x1={3} y1={3} x2={9} y2={9} /><Polyline points="5 15 9 15 9 19" /><Line x1={3} y1={21} x2={9} y2={15} /><Polyline points="19 9 15 9 15 5" /><Line x1={15} y1={9} x2={21} y2={3} /><Polyline points="19 15 15 15 15 19" /><Line x1={15} y1={15} x2={21} y2={21} /></Svg>;
}

export default IconArrowsMinimize;