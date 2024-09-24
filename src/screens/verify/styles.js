import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginTop:30,
        flex:1,
        
        // backgroundColor:'white'
    },
    country: {
        flexDirection: 'row',
        marginTop: 30,
        borderRadius: 10,
        backgroundColor:'#FFFFFF',
        paddingRight: 10,
        paddingLeft: 5,
        paddingBottom: 4,
        paddingTop: 4
    },
    phone: {
        backgroundColor: '#FFFFFF',
        height: 45,
        borderRadius: 10,
        width:270,
        marginTop: 30,
        marginLeft: 10,
        paddingLeft: 10,
    },
    button: {
        marginTop: 40,
        marginBottom:10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'royalblue',
        borderColor: 'white',
        height: 50,
        padding: 5,
        borderRadius: 10,
    }
})

export default styles