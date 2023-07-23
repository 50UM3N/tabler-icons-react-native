import Svg, { Path } from 'react-native-svg';
         
function IconBrandWikipedia({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-wikipedia" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4.984h2" /><Path d="M8 4.984h2.5" /><Path d="M14.5 4.984h2.5" /><Path d="M22 4.984h-2" /><Path d="M4 4.984l5.455 14.516l6.545 -14.516" /><Path d="M9 4.984l6 14.516l6 -14.516" /></Svg>;

}
export default IconBrandWikipedia;
        