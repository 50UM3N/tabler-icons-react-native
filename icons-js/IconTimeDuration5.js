import Svg, { Path } from 'react-native-svg';
         
function IconTimeDuration5({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-time-duration-5" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 15h2a1.5 1.5 0 0 0 0 -3h-2v-3h3.5" /><Path d="M3 12v.01" /><Path d="M21 12v.01" /><Path d="M12 21v.01" /><Path d="M7.5 4.2v.01" /><Path d="M16.5 19.8v.01" /><Path d="M7.5 19.8v.01" /><Path d="M4.2 16.5v.01" /><Path d="M19.8 16.5v.01" /><Path d="M19.8 7.5v.01" /><Path d="M4.2 7.5v.01" /><Path d="M16.5 4.206a9.042 9.042 0 0 0 -4.5 -1.206" /></Svg>;

}
export default IconTimeDuration5;
        