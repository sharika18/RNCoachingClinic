import React, {useState} from 'react';
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  useColorScheme,
  View,
} from 'react-native';

const Assignment1 = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const _soal2: ISoal2[] = [
    {
      jenis: 'penjumlahan',
      color: 'blue',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari penjumlahannya adalah ${result}`),
      tanda: '+',
    },
    {
      jenis: 'pengurangan',
      color: 'green',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari pengurangannya adalah ${result}`),
      tanda: '-',
    },
    {
      jenis: 'perkalian',
      color: 'magenta',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari perkaliannya adalah ${result}`),
      tanda: 'x',
    },

    {
      jenis: 'pembagian',
      color: 'red',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari pembagiannya adalah ${result}`),
      tanda: ':',
    },
  ];

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, styles.content]}>
        <View>
          <Text style={styles.title}>ASSIGNMENT 1</Text>
        </View>
        <Soal1 />
        {_soal2.map((e, i) => {
          return (
            <Soal2
              tanda={e.tanda}
              key={i}
              jenis={e.jenis}
              color={e.color}
              onPress={e.onPress}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

interface ISoal1 {
  nama : string;
  email : string;
  telepon : string;
  alamat : string | undefined;
  hobi : string | undefined;
}

const previewSoal1 = (param: ISoal1):string=>
{
  var strView = `
  Nama : ${param.nama} 
  Email : ${param.email} 
  Telepon : ${param.telepon} 
  Alamat : ${param.alamat} 
  Hobi : ${param.hobi}`;

  return strView;
}

const Soal1 = () => {

  const previewSoal1_Revision = (param: ISoal1) =>
  {
    var strView = `
    Nama : ${param.nama} 
    Email : ${param.email} 
    Telepon : ${param.telepon} 
    Alamat : ${param.alamat} 
    Hobi : ${param.hobi}`;

    Alert.alert
    (
      'Preview Your Form Detail',
      strView,
      [
        {text: 'OK', onPress: () => 
          {
            setNama(""); 
            setEmail("");
            setTelepon("");
            setAlamat("");
            setHobi("");
          }
        },
      ], 
      { cancelable: false }
    )
  }
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [alamat, setAlamat] = useState<string | undefined>();
  const [hobi, setHobi] = useState<string | undefined>();

  return (
    <View style={[backgroundStyle, styles.tasks]}>
      <Text style={styles.title}>Soal 1</Text>
      <TextInput
        style={styles.textInput}
        value={nama}
        placeholder="Nama*"
        onChangeText={val => setNama(val)}
      />
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Email*"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        style={styles.textInput}
        value={telepon}
        placeholder="Telepon*"
        keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
        onChangeText={val => setTelepon(val.replace(/[^0-9]/g, ''))}
      />
      <TextInput
        style={styles.textInput}
        value={alamat}
        placeholder="Alamat"
        onChangeText={val => setAlamat(val)}
      />
      <TextInput
        style={styles.textInput}
        value={hobi}
        placeholder="Hobi"
        onChangeText={val => setHobi(val)}
      />
      <Button
        onPress={() => {
          // Alert.alert
          // (
          //   'Preview Your Form',
          //   previewSoal1({nama, email, telepon, alamat, hobi}),
          //   [
          //     {text: 'OK', onPress: () => 
          //       {
          //         setNama(""); 
          //         setEmail("");
          //         setTelepon("");
          //         setAlamat("");
          //         setHobi("");
          //       }
          //     },
          //   ], 
          //   { cancelable: false }
          // )
          previewSoal1_Revision({nama, email, telepon, alamat, hobi});
          // Soal 1
          // Requirement:
          // - buat sebuah function yang apabila dipanggil
          //   menampilkan Alert dengan message isian dari form ini
          // - mengimplementasikan interface sesuai dengan tipe data masing-masing input
          // - setelah selesai menampilkan Alert, clear semua input
        }}
        title="Submit"
      />
    </View>
  );
};

interface ISoal2 {
  jenis: 'penjumlahan' | 'pengurangan' | 'perkalian' | 'pembagian';
  color: TextStyle['color'];
  onPress: (result: number) => void;
  tanda: string;
}

interface ISoal2_Value {
  val1 : number;
  val2 : number;
}

const calculateSoal2 = (param : ISoal2, param2 : ISoal2_Value)=> {

  var numberVal1 = param2.val1;
  var numberVal2 = param2.val2;

  var result = 0;

  switch(param.jenis){
    case 'penjumlahan':
      result = numberVal1 + numberVal2;
      break;
    case 'pengurangan':
      result = numberVal1 - numberVal2;
      break;
    case 'perkalian':
      result = numberVal1 * numberVal2;
      break;
    case 'pembagian':
      result = numberVal1 / numberVal2;
      break;
  }

  param.onPress(result);
  

}

const Soal2 = (param: ISoal2) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  return (
    <View style={[backgroundStyle, styles.tasks]}>
      <Text style={[styles.title, {color: param.color}]}>
        Soal 2 #{param.jenis}
      </Text>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.textInputNumber}
            value={input1?.toString()}
            placeholder="Input 1"
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
            onChangeText={val => setInput1(val.replace(/[^0-9]/g, ''))}
            maxLength={10}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.labelCenter}>{param.tanda}</Text>
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.textInputNumber}
            value={input2}
            placeholder="Input 1"
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
            onChangeText={val => setInput2(val.replace(/[^0-9]/g, ''))}
            maxLength={10}
          />
        </View>
      </View>
      <Button
        onPress={() => 
          {
            var numberInput1 = Number(input1);
            var numberInput2 = Number(input2);
            calculateSoal2
            (
              {
                jenis: param.jenis,
                color: param.color,
                onPress: (result: number) => {
                  Alert.alert
                  (
                    'Hasil Perhitungan',
                    `Hasil dari ${param.jenis} (${input1} ${param.tanda} ${input2}) adalah ${result}`,
                    [
                      {
                        text: 'OK', onPress: () => 
                        {
                          setInput1(""); 
                          setInput2("");
                        }
                      },
                    ], 
                    { cancelable: false }
                  )
                }, // atau tinggal panggil aja param.onPress
                tanda: param.tanda
              }, 
              { 
                val1: numberInput1, 
                val2: numberInput2
              }
            )
            // Soal 2
            // Requirement:
            // - buat sebuah function yang apabila dipanggil
            //   melakukan perhitungan sesuai dengan jenis perhitungannya
            // - menggunakan callback function: memanggil param.onPress
            // - mengimplementasikan interface
            // - validasi input & convert input sebelum melakukan perhitungan
            // - setelah hitung selesai, clear input
          }
        }
        title="Hitung"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  labelCenter: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
  },
  textInputNumber: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  tasks: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 50,
  },
});

export default Assignment1;
