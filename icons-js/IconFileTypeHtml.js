import Svg, { Path } from 'react-native-svg';
         
function IconFileTypeHtml({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-html" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><Path d="M2 21v-6" /><Path d="M5 15v6" /><Path d="M2 18h3" /><Path d="M20 15v6h2" /><Path d="M13 21v-6l2 3l2 -3v6" /><Path d="M7.5 15h3" /><Path d="M9 15v6" /></Svg>;

}
export default IconFileTypeHtml;
        