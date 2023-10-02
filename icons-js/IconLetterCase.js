import Svg, { Path } from 'react-native-svg';
         
function IconLetterCase({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-case" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17.5 15.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><Path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" /><Path d="M3 13h7" /><Path d="M21 12v7" /></Svg>;

}
export default IconLetterCase;
        