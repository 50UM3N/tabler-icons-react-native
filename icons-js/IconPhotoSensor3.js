import Svg, { Path } from 'react-native-svg';
         
function IconPhotoSensor3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-sensor-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 4h1a2 2 0 0 1 2 2v1" /><Path d="M20 17v1a2 2 0 0 1 -2 2h-1" /><Path d="M7 20h-1a2 2 0 0 1 -2 -2v-1" /><Path d="M4 7v-1a2 2 0 0 1 2 -2h1" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 18v2" /><Path d="M4 12h2" /><Path d="M12 4v2" /><Path d="M20 12h-2" /></Svg>;

}
export default IconPhotoSensor3;
        