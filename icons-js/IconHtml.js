import Svg, { Path } from 'react-native-svg';
                    
function IconHtml({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-html" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 16v-8l2 5l2 -5v8" /><Path d="M1 16v-8" /><Path d="M5 8v8" /><Path d="M1 12h4" /><Path d="M7 8h4" /><Path d="M9 8v8" /><Path d="M20 8v8h3" /></Svg>;

}
export default IconHtml;
                    