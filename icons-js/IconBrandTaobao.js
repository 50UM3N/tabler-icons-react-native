import Svg, { Path } from 'react-native-svg';
         
function IconBrandTaobao({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-taobao" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 5c.968 .555 1.335 1.104 2 2" /><Path d="M2 10c5.007 3.674 2.85 6.544 0 10" /><Path d="M10 4c-.137 4.137 -2.258 5.286 -3.709 6.684" /><Path d="M10 6c2.194 -.8 3.736 -.852 6.056 -.993c4.206 -.158 5.523 2.264 5.803 5.153c.428 4.396 -.077 7.186 -2.117 9.298c-1.188 1.23 -3.238 2.62 -7.207 .259" /><Path d="M11 10h6" /><Path d="M13 10v6.493" /><Path d="M8 13h10" /><Path d="M16 15.512l.853 1.72" /><Path d="M16.5 17c-1.145 .361 -7 3 -8.5 -.5" /><Path d="M11.765 8.539l-1.765 2.461" /></Svg>;

}
export default IconBrandTaobao;
        