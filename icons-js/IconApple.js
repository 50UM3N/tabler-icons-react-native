import Svg, { Path } from 'react-native-svg';
                    
function IconApple({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apple" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><Path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" /><Path d="M10 10.5c1.333 .667 2.667 .667 4 0" /></Svg>;

}
export default IconApple;
                    