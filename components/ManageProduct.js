import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import ThemeColors from '../assets/theme/ThemeColors';
import { Ionicons } from '@expo/vector-icons';

export default function ManageProduct() {
  //========================================================================
  const addIcon = (
    <Ionicons name="add" size={48} color={ThemeColors.primaryTextColor} />
  );
  const [image1, setImage1] = useState(addIcon);
  const [image2, setImage2] = useState(addIcon);
  const [image3, setImage3] = useState(addIcon);
  const [proName, setProName] = useState('');
  const [proDes, setProDes] = useState('');
  const [proPrice, setProPrice] = useState('');
  const [proAvbQty, setProAvbQty] = useState('');
  const [proCallNo, setProCallNo] = useState('');
  const [proWhatsappNo, setProWhatsappNo] = useState('');

  const [titleName, setTitleName] = useState('Add');
  //========================================================================

  const CustomButton = (props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (props.name == 'Add') {
            //add or edit product
            handleSubmit();
          } else if (props.name == 'Delete') {
            //delete product
            console.log('delete');
          }
        }}>
        <View style={styles.btnStyle}>
          <Text style={styles.btnText}>
            <Ionicons name={props.icon} size={24} color={styles.btnText} />
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleSubmit = () => {
    //validations ===============================================
    (proName == '' ||
      proDes == '' ||
      proPrice == '' ||
      proAvbQty == '' ||
      proCallNo == '' ||
      proWhatsappNo == '') &&
      Alert.alert('All Fields are required !');

    //===========================================================
    // Construct the request body
    const requestBody = {
      // image1: image1,
      // image2: image2,
      // image3: image3,
      proName: proName,
      proDes: proDes,
      proPrice: proPrice,
      proAvbQty: proAvbQty,
      proCallNo: proCallNo,
      proWhatsappNo: proWhatsappNo,
    };

    // Send the request to the server
    fetch('https://example.com/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        // Handle the response
        console.log(response);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
    //===========================================================
  };

  const ImageButton = (props) => {
    return (
      <TouchableOpacity onPress={() => changeImage(props)}>
        <View style={[styles.singleImage, styles.shadowStyle]}>
          {props.image}
        </View>
      </TouchableOpacity>
    );
  };

  const changeImage = () => {
    //change image
    console.log('image');
  };

  //========================================================================


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.titleContainer, styles.shadowStyle]}>
          <Text style={styles.titleStyle}>{titleName} Product</Text>
        </View>

        <View style={[styles.imageContainer, styles.row, styles.spaceBetween]}>
          <ImageButton image={image1} setImage={setImage1} />
          <ImageButton image={image2} setImage={setImage2} />
          <ImageButton image={image3} setImage={setImage3} />
        </View>
        <View style={styles.inputContainer}>
          <View style={[styles.textInputStyle, styles.shadowStyle]}>
            <TextInput
              editable={true}
              keyboardType="default"
              placeholder="Enter Product Name Here"
              placeholderTextColor={ThemeColors.primaryTextColor}
              value={proName}
              onChangeText={(text) => setProName(text)}
            />
          </View>
          <View style={[styles.textAreaStyle, styles.shadowStyle]}>
            <TextInput
              editable={true}
              keyboardType="default"
              multiline
              numberOfLines={4}
              maxLength={250}
              placeholder="Enter Product Description Here (250 characters)"
              placeholderTextColor={ThemeColors.primaryTextColor}
              value={proDes}
              onChangeText={(text) => setProDes(text)}
            />
          </View>
          <View style={[styles.row, styles.spaceBetween]}>
            <View style={{ width: '48%' }}>
              <View style={[styles.textInputStyle, styles.shadowStyle]}>
                <TextInput
                  editable={true}
                  keyboardType="numeric"
                  placeholder="Enter Price Here"
                  placeholderTextColor={ThemeColors.primaryTextColor}
                  value={proPrice}
                  onChangeText={(text) => setProPrice(text.replace(/[^0-9]/g, ''))}
                />
              </View>
              <View style={[styles.textInputStyle, styles.shadowStyle]}>
                <TextInput
                  editable={true}
                  keyboardType="numeric"
                  placeholder="Enter Call No"
                  placeholderTextColor={ThemeColors.primaryTextColor}
                  value={proCallNo}
                  onChangeText={(text) => setProCallNo(text.replace(/[^0-9]/g, ''))}
                />
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <View style={[styles.textInputStyle, styles.shadowStyle]}>
                <TextInput
                  editable={true}
                  keyboardType="numeric"
                  placeholder="Enter Avb Qty Here"
                  placeholderTextColor={ThemeColors.primaryTextColor}
                  value={proAvbQty}
                  onChangeText={(text) => setProAvbQty(text.replace(/[^0-9]/g, ''))}
                />
              </View>
              <View style={[styles.textInputStyle, styles.shadowStyle]}>
                <TextInput
                  editable={true}
                  keyboardType="numeric"
                  placeholder="Enter Whatsapp No"
                  placeholderTextColor={ThemeColors.primaryTextColor}
                  value={proWhatsappNo}
                  onChangeText={(text) => setProWhatsappNo(text.replace(/[^0-9]/g, ''))}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.btnContainer,
              styles.shadowStyle,
              styles.row,
              styles.spaceBetween,
            ]}>
            <CustomButton icon="trash-outline" name="Delete" />
            <CustomButton icon="add-circle-outline" name="Add" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  shadowStyle: {
    shadowColor: '#1E3258',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    borderRadius: 8,
    elevation: 2,
  },
  titleContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: ThemeColors.primaryReverseColor,
    paddingVertical: 10,
  },
  titleStyle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: ThemeColors.primaryReverseTextColor,
  },
  imageContainer: {
    marginTop: 20,
  },
  singleImage: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.primaryColor,
  },
  inputContainer: {
    width: '100%',
  },
  textInputStyle: {
    width: '100%',
    marginTop: 20,
    height: 40,
    padding: 10,
    backgroundColor: ThemeColors.primaryColor,
  },
  textAreaStyle: {
    marginTop: 20,
    width: '100%',
    height: 160,
    padding: 10,
    backgroundColor: ThemeColors.primaryColor,
  },
  btnContainer: {
    backgroundColor: ThemeColors.primaryColor,
    marginTop: 20,
    padding: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
  btnStyle: {
    backgroundColor: ThemeColors.primaryReverseColor,
    padding: 10,
    borderRadius: 8,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: ThemeColors.primaryReverseTextColor,
  },
});
