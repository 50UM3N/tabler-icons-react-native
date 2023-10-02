import Svg, { Path } from 'react-native-svg';
         
function IconFileTypeTxt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-txt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M16.5 15h3" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><Path d="M4.5 15h3" /><Path d="M6 15v6" /><Path d="M18 15v6" /><Path d="M10 15l4 6" /><Path d="M10 21l4 -6" /></Svg>;

}
export default IconFileTypeTxt;
        