import Svg, { Path, Rect, Line } from "react-native-svg";

function IconCalendarEvent({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={5} width={16} height={16} rx={2} /><Line x1={16} y1={3} x2={16} y2={7} /><Line x1={8} y1={3} x2={8} y2={7} /><Line x1={4} y1={11} x2={20} y2={11} /><Rect x={8} y={15} width={2} height={2} /></Svg>;
}

export default IconCalendarEvent;