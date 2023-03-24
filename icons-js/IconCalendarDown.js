import Svg, { Path } from 'react-native-svg';
                    
function IconCalendarDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" /><Path d="M19 16v6" /><Path d="M22 19l-3 3l-3 -3" /><Path d="M16 3v4" /><Path d="M8 3v4" /><Path d="M4 11h16" /></Svg>;

}
export default IconCalendarDown;
                    