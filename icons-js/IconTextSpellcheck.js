import Svg, { Path } from 'react-native-svg';
                    
function IconTextSpellcheck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-spellcheck" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" /><Path d="M5 10h7" /><Path d="M10 18l3 3l7 -7" /></Svg>;

}
export default IconTextSpellcheck;
                    