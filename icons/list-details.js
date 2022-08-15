import Svg, { Path, Rect } from "react-native-svg";

function IconListDetails({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 5h8" /><Path d="M13 9h5" /><Path d="M13 15h8" /><Path d="M13 19h5" /><Rect x={3} y={4} width={6} height={6} rx={1} /><Rect x={3} y={14} width={6} height={6} rx={1} /></Svg>;
}

export default IconListDetails;