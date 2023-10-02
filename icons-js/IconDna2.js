import Svg, { Path } from 'react-native-svg';
         
function IconDna2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dna-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2 .008 -.014c-3.328 1.99 -5 4.662 -5.008 8.014v1" /><Path d="M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2 .008 .014c-3.328 -1.991 -5 -4.662 -5.008 -8.014v-1" /><Path d="M7 4h10" /><Path d="M7 20h10" /><Path d="M8 8h8" /><Path d="M8 16h8" /></Svg>;

}
export default IconDna2;
        