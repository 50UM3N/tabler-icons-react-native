import Svg, { Path } from 'react-native-svg';
                    
function IconBookDownload({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-download" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" /><Path d="M13 16h-7a2 2 0 0 0 -2 2" /><Path d="M15 19l3 3l3 -3" /><Path d="M18 22v-9" /></Svg>;

}
export default IconBookDownload;
                    