import Svg, { Path } from 'react-native-svg';
                    
function IconHttpPatch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-patch" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" /><Path d="M10 16v-6a2 2 0 1 1 4 0v6" /><Path d="M10 13h4" /><Path d="M17 8h4" /><Path d="M19 8v8" /></Svg>;

}
export default IconHttpPatch;
                    