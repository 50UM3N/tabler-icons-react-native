import Svg, { Path } from 'react-native-svg';
         
function IconQuotes({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-quotes" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" /><Path d="M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" /><Path d="M16 18c1.333 -1.854 1.333 -4.146 0 -6" /><Path d="M20 18c1.333 -1.854 1.333 -4.146 0 -6" /></Svg>;

}
export default IconQuotes;
        