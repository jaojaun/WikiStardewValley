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
  img: {
    flexDirection:'column',
    alignItems: 'center',
  },
  perfilCntt: {
    flexDirection: 'row',
    marginTop: 15,
  },
  perfilBtn: {
    borderRadius: 20,
    backgroundColor: '#AEC66F',
    marginLeft: 15,
    padding: 5,
  },
  perfilTlt: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: 'bold',
  },
  dados:{
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 15,
  },
  itemCntt: {
    flexDirection: 'column',
    marginLeft: 10
  },
  farm:{
    width: 60,
    height: 60,
  },
  tltItem: {
    fontSize: 15,
    width: 60,
    textAlign: 'center',
    color: 'white',
    marginTop: 10
  },
  pet: {
    width: 45,
    height: 60,
    alignSelf: 'center'
  },
  heart: {
    width: 50,
    height: 50,
  },
  backItens: {
    backgroundColor: '#AEC66F',
    padding: 5,
    borderRadius: 20,
  },
  title: {
    backgroundColor: '#AEC66F',
    color: '#193D2A',
    fontSize: 17,
    marginTop: 20,
    borderRadius: 20,
    padding: 5,
    fontWeight: 'bold',
    marginRight: 200
  },
  persosCntt: {
    marginTop: 15,
    flexDirection: 'row',
  },
  persos: {
    width: 70,
    height: 70,
    marginLeft: 20
  }
})