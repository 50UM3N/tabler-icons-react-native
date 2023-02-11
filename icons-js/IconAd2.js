import Svg, { Path } from 'react-native-svg';
                    
function IconAd2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ad-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.933 5h-6.933v16h13v-8" /><Path d="M14 17h-5" /><Path d="M9 13h5v-4h-5z" /><Path d="M15 5v-2" /><Path d="M18 6l2 -2" /><Path d="M19 9h2" /></Svg>;

}
export default IconAd2;
                    