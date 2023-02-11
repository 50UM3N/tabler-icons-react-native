import Svg, { Path } from 'react-native-svg';
                    
function IconBrandStackoverflow({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-stackoverflow" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" /><Path d="M8 16h8" /><Path d="M8.322 12.582l7.956 .836" /><Path d="M8.787 9.168l7.826 1.664" /><Path d="M10.096 5.764l7.608 2.472" /></Svg>;

}
export default IconBrandStackoverflow;
                    