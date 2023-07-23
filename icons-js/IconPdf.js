import Svg, { Path } from 'react-native-svg';
         
function IconPdf({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pdf" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" /><Path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" /><Path d="M17 12h3" /><Path d="M21 8h-4v8" /></Svg>;

}
export default IconPdf;
        