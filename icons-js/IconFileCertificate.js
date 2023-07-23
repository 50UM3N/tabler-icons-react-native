import Svg, { Path } from 'react-native-svg';
         
function IconFileCertificate({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-certificate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" /><Path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" /></Svg>;

}
export default IconFileCertificate;
        