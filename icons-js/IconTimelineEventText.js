import Svg, { Path } from 'react-native-svg';
                    
function IconTimelineEventText({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-timeline-event-text" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M10 20h-6" /><Path d="M14 20h6" /><Path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z" /><Path d="M9 6h6" /><Path d="M9 9h3" /></Svg>;

}
export default IconTimelineEventText;
                    