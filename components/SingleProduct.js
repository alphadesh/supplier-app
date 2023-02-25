import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import ThemeColors from '../assets/theme/ThemeColors';
import { Ionicons } from '@expo/vector-icons';

import { getSingleProductDetails } from '../data/getData';

const image1 = getSingleProductDetails.proImage1;
const image2 = getSingleProductDetails.proImage2;
const image3 = getSingleProductDetails.proImage3;
const proId = getSingleProductDetails.proId;
const proTitle = getSingleProductDetails.proTitle;
const proDes = getSingleProductDetails.proDes;
const proPrice = getSingleProductDetails.proPrice;
const proAvbQty = getSingleProductDetails.proAvbQty;
const callNo = getSingleProductDetails.callNo;
const whatsappNo = getSingleProductDetails.whatsappNo;

const ProductSubImages = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setMainImage(props.imgSrc);
      }}>
      <View style={[styles.subImage, styles.shadowStyle]}>
        <Image style={styles.imageStyle} source={props.imgSrc} />
      </View>
    </TouchableOpacity>
  );
};

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.name == 'Call') {
          Linking.openURL(`tel:${callNo}`);
        } else if (props.name == 'Whatsapp') {
          Linking.openURL(`whatsapp://send?phone=${whatsappNo}`);
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

export default function SingleProduct() {
  const [mainImage, setMainImage] = useState(image1);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <View style={[styles.mainImageStyle, styles.shadowStyle]}>
          <Image style={styles.imageStyle} source={mainImage} />
        </View>
        <View style={[styles.subImages, styles.row, styles.spaceBetween]}>
          <ProductSubImages imgSrc={image1} setMainImage={setMainImage} />
          <ProductSubImages imgSrc={image2} setMainImage={setMainImage} />
          <ProductSubImages imgSrc={image3} setMainImage={setMainImage} />
        </View>
      </View>
      <View>
        <View style={[styles.textContainer, styles.shadowStyle]}>
          <Text style={styles.proTitleStyle}>{proTitle}</Text>
          <Text style={styles.proDesStyle}>{proDes}</Text>
        </View>

        <View
          style={[
            styles.textContainer,
            styles.shadowStyle,
            styles.row,
            styles.spaceBetween,
          ]}>
          <Text style={styles.proTitleStyle}>Rs. {proPrice}</Text>
          <Text style={styles.proTitleStyle}>Avb.Qty - {proAvbQty}</Text>
        </View>

        <View
          style={[
            styles.btnContainer,
            styles.shadowStyle,
            styles.row,
            styles.spaceBetween,
          ]}>
          <CustomButton icon="call-outline" name="Call" />
          <CustomButton icon="logo-whatsapp" name="Whatsapp" />
          <CustomButton icon="md-cart-outline" name="Order" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: 300,
  },
  textContainer: {
    backgroundColor: ThemeColors.primaryColor,
    marginTop: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 8,
  },
  btnContainer: {
    backgroundColor: ThemeColors.primaryColor,
    marginTop: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 8,
  },
  mainImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginTop: 20,
    backgroundColor: ThemeColors.primaryColor,
  },
  subImages: {
    height: 200,
    width: '100%',
    marginTop: 15,
  },
  subImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 60,
    backgroundColor: ThemeColors.primaryColor,
  },
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 8,
    height: '100%',
    width: '100%',
  },
  shadowStyle: {
    shadowColor: '#1E3258',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    borderRadius: 8,
    elevation: 2,
  },
  proTitleStyle: {
    fontSize: 18,
    color: ThemeColors.primaryTextColor,
  },
  proDesStyle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
    color: ThemeColors.secondaryTextColor,
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
