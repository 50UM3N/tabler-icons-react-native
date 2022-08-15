import Svg, { Path, Circle, Line, Polyline } from "react-native-svg";

function IconArrowUpRightCircle({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={15} y1={9} x2={9} y2={15} /><Polyline points="15 15 15 9 9 9" /></Svg>;
}

export default IconArrowUpRightCircle;