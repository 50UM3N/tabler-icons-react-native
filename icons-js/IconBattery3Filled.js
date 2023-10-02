import Svg, { Path } from 'react-native-svg';
         
function IconBattery3Filled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-battery-3-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 6a3 3 0 0 1 2.995 2.824l.005 .176v.086l.052 .019a1.5 1.5 0 0 1 .941 1.25l.007 .145v3a1.5 1.5 0 0 1 -.948 1.395l-.052 .018v.087a3 3 0 0 1 -2.824 2.995l-.176 .005h-11a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h11zm-10 3a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill={color} /></Svg>;

}
export default IconBattery3Filled;
        