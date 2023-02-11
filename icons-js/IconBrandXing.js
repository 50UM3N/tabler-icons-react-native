import Svg, { Path } from 'react-native-svg';
                    
function IconBrandXing({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-xing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 21l-4 -7l6.5 -11" /><Path d="M7 7l2 3.5l-3 4.5" /></Svg>;

}
export default IconBrandXing;
                    