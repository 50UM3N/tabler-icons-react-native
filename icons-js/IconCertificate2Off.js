import Svg, { Path } from 'react-native-svg';
         
function IconCertificate2Off({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate-2-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12a3 3 0 1 0 3 3" /><Path d="M11 7h3" /><Path d="M10 18v4l2 -1l2 1v-4" /><Path d="M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.825c.25 -.112 .529 -.175 .82 -.175h8a2 2 0 0 1 2 2v9m-.175 3.82a2 2 0 0 1 -1.825 1.18h-2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCertificate2Off;
        