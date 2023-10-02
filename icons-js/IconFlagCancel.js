import Svg, { Path } from 'react-native-svg';
         
function IconFlagCancel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-cancel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.342 14.941a4.993 4.993 0 0 1 -1.342 -.941a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" /><Path d="M5 21v-7" /><Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 21l4 -4" /></Svg>;

}
export default IconFlagCancel;
        