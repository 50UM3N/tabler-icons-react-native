import Svg, { Path } from 'react-native-svg';
                    
function IconTrain({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-train" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" /><Path d="M3 15h16a2 2 0 0 0 2 -2" /><Path d="M3 6v5h17.5" /><Path d="M3 10l0 4" /><Path d="M8 11l0 -5" /><Path d="M13 11l0 -4.5" /><Path d="M3 19l18 0" /></Svg>;

}
export default IconTrain;
                    