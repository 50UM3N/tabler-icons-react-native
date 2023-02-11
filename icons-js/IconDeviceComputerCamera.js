import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceComputerCamera({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-computer-camera" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><Path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486" /></Svg>;

}
export default IconDeviceComputerCamera;
                    