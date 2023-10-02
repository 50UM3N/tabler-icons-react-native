import Svg, { Path } from 'react-native-svg';
         
function IconLetterA({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-a" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" /><Path d="M7 13l10 0" /></Svg>;

}
export default IconLetterA;
        