import Svg, { Path } from 'react-native-svg';
                    
function IconScooterElectric({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scooter-electric" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" /><Path d="M10 4l-2 4h3l-2 4" /></Svg>;

}
export default IconScooterElectric;
                    