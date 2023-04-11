import { StyleSheet, Dimensions } from 'react-native';
import {Theme} from 'src/theme/constants';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.white,
  },
  viewContainer: {
    flex: 1,
    padding: 15,
  },
  cardContainer: {
    flex: 1,
    borderWidth: 1,
    marginLeft:10,
    marginRight:10,
    borderColor: Theme.colors.common.gray,
  },
  rowContainer: {
    padding: 5,
    flexDirection: 'row',
  },
  circleViewContainer: {
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  btnViewContainer: {
    backgroundColor: Theme.colors.common.paleGreen,
    padding: 10,
    height: 50,
    borderRadius: 10,
  },
  btnViewRedContainer: {
    backgroundColor: Theme.colors.common.red,
    height: 30,
    borderRadius: 10,
  },
  btnViewGreenContainer: {
    backgroundColor: Theme.colors.common.greenIdeal,
    height: 30,
    borderRadius: 10,
  },
  btnText16White: {
    padding: 5,
    color: Theme.colors.common.white,
    fontSize: 16,
    fontFamily: Theme.fonts.SourceSansProSemiBold,
    textAlign: 'center',
  },
  chkViewContainer: {
    padding: 10,
    height: 50,
    flexDirection: 'row'
  },
  Text16: {
    padding: 5,
    color: Theme.colors.common.black,
    fontSize: 16,
    fontFamily: Theme.fonts.SourceSansProSemiBold,
  },
  space10: {
    height: 10,
  },
  space50: {
    height: 50,
  },
  headerContainer: {
    padding: 5,
    borderColor: Theme.colors.common.darkGrey,
    flexDirection: 'row',
    backgroundColor: Theme.colors.common.paleGreen
  },
  headerBackBtnContainer: {
    width: '20%',
  },
  padding15: {
    padding: 15,
  },
  headerBackBtn: {
    padding: 5,
    fontSize: 14,
    color: Theme.colors.text.black,
    textAlign: 'center',
  },
  headerTitleContainer: {
    width: '60%',
  },
  headerTitle: {
    padding: 5,
    fontSize: 20,
    fontFamily: Theme.fonts.SourceSansProSemiBold,
    color: Theme.colors.text.white,
    textAlign: 'center',
  },
  headerArcView: {
    width:'100%',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute'
  },
  FlatListItemSM: {
    padding: 5,
    minHeight: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: Theme.colors.common.commonGray,
  },
  FlatListItemCard: {
    flex:1,
    margin:5,
    minHeight: 100,
    borderWidth: 0.5,
    borderColor: Theme.colors.common.commonGray,
  },
  Txt14N: {
    fontSize: 14,
    fontFamily: Theme.fonts.SourceSansProRegular,
  },
  Txt16N: {
    fontSize: 16,
    fontFamily: Theme.fonts.SourceSansProRegular,
  },
  Txt14B: {
    fontSize: 14,
    fontFamily: Theme.fonts.SourceSansProSemiBold,
  },
  Txt16B: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Theme.fonts.SourceSansProSemiBold,
  },
  Txt16BCenter: {
    fontSize: 16,
    fontFamily: Theme.fonts.SourceSansProSemiBold,
    textAlign: 'center',
    color: Theme.colors.common.black,
  },
  containerStyle: {
    alignSelf: 'center',
    width: '100%',
    overflow: 'hidden',
    height: window.width / 4,
  },
  sliderContainerStyle: {
      borderRadius: window.width,
      width: window.width * 2,
      height: window.width * 2,
      marginLeft: -(window.width / 2),
      position: 'absolute',
      bottom: 0,
      overflow: 'hidden',
  },
  slider: {
    height: window.width / 1.7,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: Theme.colors.common.darkBlue
  },
  containerStyleNoHeader: {
    alignSelf: 'center',
    width: '100%',
    overflow: 'hidden',
    height: window.width / 2,
    backgroundColor: Theme.colors.background.white,
  },
  sliderContainerStyleNoHeader: {
      borderRadius: window.width,
      width: window.width * 2,
      height: window.width * 2,
      marginLeft: -(window.width / 2),
      position: 'absolute',
      bottom: 0,
      overflow: 'hidden',
  },
  sliderNoHeader: {
    height: window.width / 1.7,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: Theme.colors.background.lightBlue
  },
  parent: {
    height : '50%',
    width : '100%',
    transform : [ { scaleX : 2 } ],
    borderBottomStartRadius : 200,
    borderBottomEndRadius : 200,
    overflow : 'hidden',
  },
  child: {
      flex : 1,
      transform : [ { scaleX : 0.5 } ],
      backgroundColor : Theme.colors.background.lightBlue,
      alignItems : 'center',
      justifyContent : 'center'
  },
  input: {
    width: '100%',
    borderRadius: 10,
    height: 45,
    backgroundColor: Theme.colors.common.white,
    padding: 5,
    fontSize: 16,
    fontFamily: Theme.fonts.SourceSansProRegular,
  },
  tabBarLabel: {
    color: Theme.colors.common.black,
    fontSize: 12,
  },
  headerLeft: {
    marginLeft: 15,
    width: 40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTabTitle: {
    color: Theme.colors.common.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    color: Theme.colors.common.white,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: Theme.colors.common.white,
    fontWeight: 'bold',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: Theme.colors.common.white,
  },
  drawerItemFocused: {
    borderWidth:1,
  },
});