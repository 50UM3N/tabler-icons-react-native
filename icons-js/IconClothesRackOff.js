import Svg, { Path } from 'react-native-svg';
                    
function IconClothesRackOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clothes-rack-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 7v1m0 4v9" /><Path d="M9 21h6" /><Path d="M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578 -.424a6 6 0 0 0 1.779 -1.229" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconClothesRackOff;
                    