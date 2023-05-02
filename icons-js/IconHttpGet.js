import Svg, { Path } from 'react-native-svg';
                    
function IconHttpGet({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-get" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /><Path d="M14 8h-4v8h4" /><Path d="M10 12h2.5" /><Path d="M17 8h4" /><Path d="M19 8v8" /></Svg>;

}
export default IconHttpGet;
                    