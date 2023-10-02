import Svg, { Path } from 'react-native-svg';
         
function IconBrandMiniprogram({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-miniprogram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><Path d="M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" /></Svg>;

}
export default IconBrandMiniprogram;
        