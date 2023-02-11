import Svg, { Path } from 'react-native-svg';
                    
function IconLanguageKatakana({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-language-katakana" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" /><Path d="M8 8c0 1.5 .5 3 -2 5" /><Path d="M12 20l4 -9l4 9" /><Path d="M19.1 18h-6.2" /></Svg>;

}
export default IconLanguageKatakana;
                    