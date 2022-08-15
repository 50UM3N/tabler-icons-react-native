import Svg, { Path, Line } from "react-native-svg";

function IconColumns({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-columns" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={6} x2={9.5} y2={6} /><Line x1={4} y1={10} x2={9.5} y2={10} /><Line x1={4} y1={14} x2={9.5} y2={14} /><Line x1={4} y1={18} x2={9.5} y2={18} /><Line x1={14.5} y1={6} x2={20} y2={6} /><Line x1={14.5} y1={10} x2={20} y2={10} /><Line x1={14.5} y1={14} x2={20} y2={14} /><Line x1={14.5} y1={18} x2={20} y2={18} /></Svg>;
}

export default IconColumns;