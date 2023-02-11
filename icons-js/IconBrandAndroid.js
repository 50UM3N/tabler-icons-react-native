import Svg, { Path } from 'react-native-svg';
                    
function IconBrandAndroid({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-android" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10l0 6" /><Path d="M20 10l0 6" /><Path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" /><Path d="M8 3l1 2" /><Path d="M16 3l-1 2" /><Path d="M9 18l0 3" /><Path d="M15 18l0 3" /></Svg>;

}
export default IconBrandAndroid;
                    