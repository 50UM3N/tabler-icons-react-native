import Svg, { Path } from 'react-native-svg';
                    
function IconBrandAmd({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-amd" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 16v-7c0 -.566 -.434 -1 -1 -1h-7l-5 -5h17c.566 0 1 .434 1 1v17l-5 -5z" /><Path d="M11.293 20.707l4.707 -4.707h-7a1 1 0 0 1 -1 -1v-7l-4.707 4.707a1 1 0 0 0 -.293 .707v6.586a1 1 0 0 0 1 1h6.586a1 1 0 0 0 .707 -.293z" /></Svg>;

}
export default IconBrandAmd;
                    