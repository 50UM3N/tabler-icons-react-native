import Svg, { Path } from 'react-native-svg';
         
function IconDeviceSpeaker({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-speaker" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><Path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 7l0 .01" /></Svg>;

}
export default IconDeviceSpeaker;
        