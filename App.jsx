import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

function App() {

  const [val, setvalue] = useState("")
  const [cal, setcal] = useState("");


  const clearheandler = () => {
    setvalue(" ");
    setcal(" ");
  }

  const calhandler = (val) => {

    let ans = eval(val);
    setcal(ans);

  }
  return (
    <View style={styles.container} >
      <Text style={styles.result}>{cal}</Text>

      <TextInput
        style={styles.input}
        value={val}
        placeholder='0'
        placeholderTextColor="gray"
      />

    


      <View style={styles.containerbtn}>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "1")}><Text style={styles.btntxt}>1</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "2")}><Text style={styles.btntxt}>2</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "3")}><Text style={styles.btntxt}>3</Text></Pressable>
      </View>

      <View style={styles.containerbtn}>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "4")}><Text style={styles.btntxt}>4</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "5")}><Text style={styles.btntxt}>5</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "6")}><Text style={styles.btntxt}>6</Text></Pressable>
      </View>
      <View style={styles.containerbtn}>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "7")}><Text style={styles.btntxt}>7</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "8")}><Text style={styles.btntxt}>8</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "9")}><Text style={styles.btntxt}>9</Text></Pressable>
      </View>

      <View style={styles.containerbtn}>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "0")}><Text style={styles.btntxt}>0</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "/")}><Text style={styles.btntxt}>/</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "*")}><Text style={styles.btntxt}>*</Text></Pressable>
      </View>

      <View style={styles.containerbtn}>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "+")}><Text style={styles.btntxt}>+</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => setvalue(prev => prev + "-")}><Text style={styles.btntxt}>-</Text></Pressable>
        <Pressable style={styles.btntext} onPress={() => clearheandler()} ><Text style={styles.btntxt}>Clear</Text></Pressable>
      </View>

      <View style={styles.containerbtn}>
        <Pressable style={styles.btntext} onPress={() => calhandler(val)}><Text style={styles.btntxt}>=</Text></Pressable>

      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",   
    justifyContent: "center",
    alignItems: "center",
  },

  containerbtn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 12
  },

  btntext: {
    backgroundColor: "#1e293b",   
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },

  btntxt: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },

  input: {
    backgroundColor: "#020617",
    width: "90%",
    height: 60,
    borderRadius: 15,
    fontSize: 24,
    paddingHorizontal: 15,
    color: "white",
    marginTop: 20
  },

  result: {
    color: "#22c55e",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10
  }
});


