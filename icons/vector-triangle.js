import Svg, { Path, Rect, Line } from "react-native-svg";

function IconVectorTriangle({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-triangle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={10} y={4} width={4} height={4} rx={1} /><Rect x={3} y={17} width={4} height={4} rx={1} /><Rect x={17} y={17} width={4} height={4} rx={1} /><Line x1={6.5} y1={17.1} x2={11.5} y2={8} /><Line x1={17.5} y1={17.1} x2={12.5} y2={8} /><Line x1={7} y1={19} x2={17} y2={19} /></Svg>;
}

export default IconVectorTriangle;