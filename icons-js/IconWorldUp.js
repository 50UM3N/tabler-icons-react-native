import Svg, { Path } from 'react-native-svg';
                    
function IconWorldUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.985 12.52a9 9 0 1 0 -8.451 8.463" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h10.9" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3a16.996 16.996 0 0 1 2.391 11.512" /><Path d="M19 22v-6" /><Path d="M22 19l-3 -3l-3 3" /></Svg>;

}
export default IconWorldUp;
                    