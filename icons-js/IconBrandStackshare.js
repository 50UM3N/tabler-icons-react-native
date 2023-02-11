import Svg, { Path } from 'react-native-svg';
                    
function IconBrandStackshare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-stackshare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 12h3l3.5 6h3.5" /><Path d="M17 6h-3.5l-3.5 6" /></Svg>;

}
export default IconBrandStackshare;
                    