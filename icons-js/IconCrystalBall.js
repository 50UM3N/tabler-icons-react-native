import Svg, { Path } from 'react-native-svg';
         
function IconCrystalBall({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-crystal-ball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.73 17.018a8 8 0 1 1 10.54 0" /><Path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z" /><Path d="M11 7a3 3 0 0 0 -3 3" /></Svg>;

}
export default IconCrystalBall;
        