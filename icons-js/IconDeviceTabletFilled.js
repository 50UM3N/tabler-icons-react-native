import Svg, { Path } from 'react-native-svg';
         
function IconDeviceTabletFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 2a2 2 0 0 1 1.995 1.85l.005 .15v16a2 2 0 0 1 -1.85 1.995l-.15 .005h-12a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-16a2 2 0 0 1 1.85 -1.995l.15 -.005h12zm-6 13a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" stroke-width="0" fill={color} /></Svg>;

}
export default IconDeviceTabletFilled;
        