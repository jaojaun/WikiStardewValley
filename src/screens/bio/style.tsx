import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    flexDirection:'column',
    alignItems: 'stretch',
    backgroundColor: '#325E47',
  },
  header: {
    flexDirection:'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  textCont: {
    color:'white',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 5
  },
  right: {
    marginLeft: 75
  },
  hen: {
    width: 50,
    height: 50,
  },
  bgPerso: {
    width: '100%',
    height: 200,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  village: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginTop: 30
  },
  perso: {
    width: 180,
    height: 180,
    marginTop: 20,
  },
  content: {
    flexDirection: 'row'
  },
  tlt: {
    marginTop: 25,
    backgroundColor: '#AEC66F',
    borderRadius: 15,
    alignItems: 'center',
    color: '#30503A',
    fontSize: 15,
    padding: 3,
    fontWeight: 'bold',
    marginRight: 100
  },
  txt: {
    width: '55%',
  },
  summary: {
    marginTop: 10,
    fontSize: 13,
    color: 'white',
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  back: {
    backgroundColor: '#193D2A',
    borderRadius: 20,
    marginTop: 20,
    width: 170,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 10,
    textDecorationLine: 'underline'
  },
  lineCntt: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rowCntt: {
    padding: 5,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tltCntt: {
    justifyContent: 'center',
  },
  titles: {
    width: '100%',
    color: 'white',
    fontSize: 15,
    marginLeft: 40,
    marginRight: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  itens: {
    width: 30,
    height: 30,
    backgroundColor: '#30503A',
    borderRadius: 10,
  },
  tltItens: {
    color: 'white',
    alignSelf: 'center'
  },
  bgItens: {
    flexDirection: 'row',
    marginTop: 5,
  },
})