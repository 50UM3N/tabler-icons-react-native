import Svg, { Path, Line } from "react-native-svg";

function IconMathSymbols({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-symbols" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={12} x2={21} y2={12} /><Line x1={12} y1={3} x2={12} y2={21} /><Line x1={16.5} y1={4.5} x2={19.5} y2={7.5} /><Line x1={19.5} y1={4.5} x2={16.5} y2={7.5} /><Line x1={6} y1={4} x2={6} y2={8} /><Line x1={4} y1={6} x2={8} y2={6} /><Line x1={18} y1={16} x2={18.01} y2={16} /><Line x1={18} y1={20} x2={18.01} y2={20} /><Line x1={4} y1={18} x2={8} y2={18} /></Svg>;
}

export default IconMathSymbols;