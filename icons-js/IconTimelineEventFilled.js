import Svg, { Path } from 'react-native-svg';
         
function IconTimelineEventFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-timeline-event-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 17c1.306 0 2.418 .835 2.83 2h5.17a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1 -5.658 0h-5.171a1 1 0 0 1 0 -2h5.17a3.001 3.001 0 0 1 2.83 -2z" stroke-width="0" fill={color} /><Path d="M17 2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2.586l-1.707 1.707a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.708 -1.707h-2.585a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 2 -2h10z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconTimelineEventFilled;
        