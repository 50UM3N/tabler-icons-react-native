import Svg, { Path } from 'react-native-svg';
         
function IconCompassOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 9l3 -1l-1 3m-1 3l-6 2l2 -6" /><Path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" /><Path d="M12 3v2" /><Path d="M12 19v2" /><Path d="M3 12h2" /><Path d="M19 12h2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCompassOff;
        