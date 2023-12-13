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
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  textCont: {
    color:'white',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 5
  },
  right: {
    backgroundColor: 'white',
    marginLeft: 50
  },
  hen: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
})