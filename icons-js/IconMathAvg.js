import Svg, { Path } from 'react-native-svg';
                    
function IconMathAvg({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-math-avg" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21l18 -18" /><Path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" /></Svg>;

}
export default IconMathAvg;
                    