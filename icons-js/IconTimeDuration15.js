import Svg, { Path } from 'react-native-svg';
         
function IconTimeDuration15({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-time-duration-15" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" /><Path d="M9 9v6" /><Path d="M3 12v.01" /><Path d="M12 21v.01" /><Path d="M7.5 4.2v.01" /><Path d="M16.5 19.8v.01" /><Path d="M7.5 19.8v.01" /><Path d="M4.2 16.5v.01" /><Path d="M19.8 16.5v.01" /><Path d="M4.2 7.5v.01" /><Path d="M21 12a9 9 0 0 0 -9 -9" /></Svg>;

}
export default IconTimeDuration15;
        