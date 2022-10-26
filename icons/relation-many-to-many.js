import Svg, { Path, Rect, Line } from "react-native-svg";

function IconRelationManyToMany({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-relation-many-to-many" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M15 14v-4l3 4v-4" /><Path d="M6 14v-4l3 4v-4" /><Line x1={12} y1={10.5} x2={12} y2={10.51} /><Line x1={12} y1={13.5} x2={12} y2={13.51} /></Svg>;
}

export default IconRelationManyToMany;