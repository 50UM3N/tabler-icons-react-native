import Svg, { Path } from 'react-native-svg';
         
function IconBrandBlender({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-blender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" /><Path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M3 16l9 -6.5" /><Path d="M6 9h9" /><Path d="M13 5l5.65 5" /></Svg>;

}
export default IconBrandBlender;
        