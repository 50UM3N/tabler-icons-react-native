import Svg, { Path } from 'react-native-svg';
         
function IconSticker2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sticker-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4h12a2 2 0 0 1 2 2v7h-5a2 2 0 0 0 -2 2v5h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" /><Path d="M20 13v.172a2 2 0 0 1 -.586 1.414l-4.828 4.828a2 2 0 0 1 -1.414 .586h-.172" /></Svg>;

}
export default IconSticker2;
        