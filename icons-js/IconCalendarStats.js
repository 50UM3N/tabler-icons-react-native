import Svg, { Path } from 'react-native-svg';
         
function IconCalendarStats({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-stats" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" /><Path d="M18 14v4h4" /><Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M15 3v4" /><Path d="M7 3v4" /><Path d="M3 11h16" /></Svg>;

}
export default IconCalendarStats;
        