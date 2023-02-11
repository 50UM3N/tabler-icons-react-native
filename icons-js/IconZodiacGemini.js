import Svg, { Path } from 'react-native-svg';
                    
function IconZodiacGemini({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-gemini" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3a21 21 0 0 0 18 0" /><Path d="M3 21a21 21 0 0 1 18 0" /><Path d="M7 4.5l0 15" /><Path d="M17 4.5l0 15" /></Svg>;

}
export default IconZodiacGemini;
                    