import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logo: {
        width: 350,
        height: 160,
        justifyContent: 'center',
        padding: 10,
        marginTop: -100
    },
    wiki: {
        width: 115,
        height: 65,
    },
    inputCont: {
        backgroundColor: 'rgba(211,211,211, 0.3)',
        padding: 5,
        width: '100%',
        borderRadius: 30,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    mainView: {
        flex: 0.20,
        justifyContent: 'center'
    },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#AEC66F4D',
      },
      buttonModal: {
        backgroundColor: '#AEC66F4D',
        marginBottom: 15,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30,
      },
})