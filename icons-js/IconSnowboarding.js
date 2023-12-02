import Svg, { Path } from 'react-native-svg';
         
function IconSnowboarding({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-snowboarding" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M7 19l4 -2.5l-.5 -1.5" /><Path d="M16 21l-1 -6l-4.5 -3l3.5 -6" /><Path d="M7 9l1.5 -3h5.5l2 4l3 1" /><Path d="M3 17c.399 1.154 .899 1.805 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927c1.333 .325 2.333 0 3 -.976" /></Svg>;

}
export default IconSnowboarding;
        