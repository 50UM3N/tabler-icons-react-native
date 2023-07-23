import Svg, { Path } from 'react-native-svg';
         
function IconZodiacAries({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-aries" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5a5 5 0 1 0 -4 8" /><Path d="M16 13a5 5 0 1 0 -4 -8" /><Path d="M12 21l0 -16" /></Svg>;

}
export default IconZodiacAries;
        