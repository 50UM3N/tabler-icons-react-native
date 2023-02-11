import Svg, { Path } from 'react-native-svg';
                    
function IconBrandDenodo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-denodo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 11h2v2h-2z" /><Path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z" /><Path d="M11 19h2v2h-2z" /><Path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z" /><Path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z" /><Path d="M11 3h2v2h-2z" /><Path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z" /></Svg>;

}
export default IconBrandDenodo;
                    