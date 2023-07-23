import Svg, { Path } from 'react-native-svg';
         
function IconFileTypeVue({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-vue" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><Path d="M4 15l2 6l2 -6" /><Path d="M11 15v4.5a1.5 1.5 0 0 0 3 0v-4.5" /><Path d="M20 15h-3v6h3" /><Path d="M17 18h2" /></Svg>;

}
export default IconFileTypeVue;
        