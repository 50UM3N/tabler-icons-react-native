import Svg, { Path } from 'react-native-svg';
         
function IconCalendarClock({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-clock" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" /><Path d="M16 3v4" /><Path d="M8 3v4" /><Path d="M4 11h10" /><Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M18 16.5v1.5l.5 .5" /></Svg>;

}
export default IconCalendarClock;
        