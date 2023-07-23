import Svg, { Path } from 'react-native-svg';
         
function IconZodiacSagittarius({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-sagittarius" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20l16 -16" /><Path d="M13 4h7v7" /><Path d="M6.5 12.5l5 5" /></Svg>;

}
export default IconZodiacSagittarius;
        