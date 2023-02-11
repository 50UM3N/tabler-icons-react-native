import Svg, { Path } from 'react-native-svg';
                    
function IconHaze({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-haze" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h1" /><Path d="M12 3v1" /><Path d="M20 12h1" /><Path d="M5.6 5.6l.7 .7" /><Path d="M18.4 5.6l-.7 .7" /><Path d="M8 12a4 4 0 1 1 8 0" /><Path d="M3 16h18" /><Path d="M3 20h18" /></Svg>;

}
export default IconHaze;
                    