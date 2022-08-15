import Svg, { Path, Polyline } from "react-native-svg";

function IconStack2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="12 4 4 8 12 12 20 8 12 4" /><Polyline points="4 12 12 16 20 12" /><Polyline points="4 16 12 20 20 16" /></Svg>;
}

export default IconStack2;