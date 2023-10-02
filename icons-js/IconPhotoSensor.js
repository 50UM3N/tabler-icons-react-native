import Svg, { Path } from 'react-native-svg';
         
function IconPhotoSensor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-sensor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 5h2a2 2 0 0 1 2 2v2" /><Path d="M21 15v2a2 2 0 0 1 -2 2h-2" /><Path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" /><Path d="M3 9v-2a2 2 0 0 1 2 -2h2" /><Path d="M7 9m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z" /></Svg>;

}
export default IconPhotoSensor;
        