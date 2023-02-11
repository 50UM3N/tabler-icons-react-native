import Svg, { Path } from 'react-native-svg';
                    
function IconTex({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tex" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 8v-1h-6v1" /><Path d="M6 15v-8" /><Path d="M21 15l-5 -8" /><Path d="M16 15l5 -8" /><Path d="M14 11h-4v8h4" /><Path d="M10 15h3" /></Svg>;

}
export default IconTex;
                    