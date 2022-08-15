import Svg, { Path, Circle, Line } from "react-native-svg";

function IconAperture({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={3.6} y1={15} x2={14.15} y2={15} /><Line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(72 12 12)" /><Line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(144 12 12)" /><Line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(216 12 12)" /><Line x1={3.6} y1={15} x2={14.15} y2={15} transform="rotate(288 12 12)" /></Svg>;
}

export default IconAperture;