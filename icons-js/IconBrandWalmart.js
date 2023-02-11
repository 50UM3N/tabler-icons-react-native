import Svg, { Path } from 'react-native-svg';
                    
function IconBrandWalmart({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-walmart" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 8.04v-5.04" /><Path d="M15.5 10l4.5 -2.5" /><Path d="M15.5 14l4.5 2.5" /><Path d="M12 15.96v5.04" /><Path d="M8.5 14l-4.5 2.5" /><Path d="M8.5 10l-4.5 -2.505" /></Svg>;

}
export default IconBrandWalmart;
                    