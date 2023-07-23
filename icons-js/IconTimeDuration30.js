import Svg, { Path } from 'react-native-svg';
         
function IconTimeDuration30({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-time-duration-30" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" /><Path d="M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" /><Path d="M3 12v.01" /><Path d="M7.5 4.2v.01" /><Path d="M7.5 19.8v.01" /><Path d="M4.2 16.5v.01" /><Path d="M4.2 7.5v.01" /><Path d="M12 21a9 9 0 0 0 0 -18" /></Svg>;

}
export default IconTimeDuration30;
        