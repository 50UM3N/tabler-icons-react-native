import Svg, { Path } from 'react-native-svg';
         
function IconHttpHead({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-head" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 16v-8" /><Path d="M7 8v8" /><Path d="M3 12h4" /><Path d="M14 8h-4v8h4" /><Path d="M10 12h2.5" /><Path d="M17 16v-6a2 2 0 1 1 4 0v6" /><Path d="M17 13h4" /></Svg>;

}
export default IconHttpHead;
        