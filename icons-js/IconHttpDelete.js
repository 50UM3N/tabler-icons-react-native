import Svg, { Path } from 'react-native-svg';
         
function IconHttpDelete({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-delete" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" /><Path d="M14 8h-4v8h4" /><Path d="M10 12h2.5" /><Path d="M17 8v8h4" /></Svg>;

}
export default IconHttpDelete;
        