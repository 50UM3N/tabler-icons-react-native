import Svg, { Path } from 'react-native-svg';
                    
function IconCertificate({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><Path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /><Path d="M6 9l12 0" /><Path d="M6 12l3 0" /><Path d="M6 15l2 0" /></Svg>;

}
export default IconCertificate;
                    