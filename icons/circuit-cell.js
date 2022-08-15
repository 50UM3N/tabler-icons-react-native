import Svg, { Path } from "react-native-svg";

function IconCircuitCell({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-cell" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h8" /><Path d="M14 12h8" /><Path d="M10 5v14" /><Path d="M14 9v6" /></Svg>;
}

export default IconCircuitCell;