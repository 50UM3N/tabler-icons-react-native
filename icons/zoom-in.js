import Svg, { Path, Circle, Line } from "react-native-svg";

function IconZoomIn({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-in" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={10} cy={10} r={7} /><Line x1={7} y1={10} x2={13} y2={10} /><Line x1={10} y1={7} x2={10} y2={13} /><Line x1={21} y1={21} x2={15} y2={15} /></Svg>;
}

export default IconZoomIn;