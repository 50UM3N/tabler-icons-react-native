import Svg, { Path } from 'react-native-svg';
                    
function IconBookUpload({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-upload" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" /><Path d="M11 16h-5a2 2 0 0 0 -2 2" /><Path d="M15 16l3 -3l3 3" /><Path d="M18 13v9" /></Svg>;

}
export default IconBookUpload;
                    