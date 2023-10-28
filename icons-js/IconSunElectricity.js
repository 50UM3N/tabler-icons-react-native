import Svg, { Path } from 'react-native-svg';
         
function IconSunElectricity({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-electricity" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4" /><Path d="M3 12h1" /><Path d="M12 3v1" /><Path d="M12 20v1" /><Path d="M5.6 5.6l.7 .7" /><Path d="M6.3 17.7l-.7 .7" /><Path d="M20 7l-3 5h4l-3 5" /></Svg>;

}
export default IconSunElectricity;
        