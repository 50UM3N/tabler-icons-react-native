import Svg, { Path, Rect, Line } from "react-native-svg";

function IconQrcode({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-qrcode" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={6} height={6} rx={1} /><Line x1={7} y1={17} x2={7} y2={17.01} /><Rect x={14} y={4} width={6} height={6} rx={1} /><Line x1={7} y1={7} x2={7} y2={7.01} /><Rect x={4} y={14} width={6} height={6} rx={1} /><Line x1={17} y1={7} x2={17} y2={7.01} /><Line x1={14} y1={14} x2={17} y2={14} /><Line x1={20} y1={14} x2={20} y2={14.01} /><Line x1={14} y1={14} x2={14} y2={17} /><Line x1={14} y1={20} x2={17} y2={20} /><Line x1={17} y1={17} x2={20} y2={17} /><Line x1={20} y1={17} x2={20} y2={20} /></Svg>;
}

export default IconQrcode;