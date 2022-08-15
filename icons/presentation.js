import Svg, { Path, Line } from "react-native-svg";

function IconPresentation({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-presentation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={4} x2={21} y2={4} /><Path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" /><Line x1={12} y1={16} x2={12} y2={20} /><Line x1={9} y1={20} x2={15} y2={20} /><Path d="M8 12l3 -3l2 2l3 -3" /></Svg>;
}

export default IconPresentation;