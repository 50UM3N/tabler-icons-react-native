import Svg, { Path } from 'react-native-svg';
                    
function IconBrandJuejin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-juejin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12l10 7.422l10 -7.422" /><Path d="M7 9l5 4l5 -4" /><Path d="M11 6l1 .8l1 -.8l-1 -.8z" /></Svg>;

}
export default IconBrandJuejin;
                    