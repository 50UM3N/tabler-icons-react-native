import Svg, { Path, Line } from "react-native-svg";

function IconArrowNarrowLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={5} y1={12} x2={19} y2={12} /><Line x1={5} y1={12} x2={9} y2={16} /><Line x1={5} y1={12} x2={9} y2={8} /></Svg>;
}

export default IconArrowNarrowLeft;