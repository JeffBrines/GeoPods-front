// Basic Import
import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';

// Libraries
import {Formik} from 'formik';

function SignUp() {
  const [d, setD] = useState(false);

  return (
    <SafeAreaView style={styles.signUp}>
      <ScrollView style={styles.signUp__scrollView}>
        <View style={styles.signUp__container}>
          <Text style={styles.signUp__title}>Sign up</Text>
          <View style={styles.signUp__block}>
            <View style={styles.signUp__topContent}>
              <Text style={styles.signUp__nameItems}>Name</Text>
              <TextInput style={styles.signUp__input} value="Alex Alex" />
            </View>
            <View style={styles.signUp__content}>
              <Text
                style={{
                  ...styles.signUp__nameItems,
                  display: d ? 'none' : 'flex',
                }}>
                E-mail
              </Text>
              <TextInput
                style={styles.signUp__input}
                value="diamondsolution123@icloud.com"
                onFocus={() => setD(true)}
                onBlur={() => setD(false)}
                numberOfLines={1}
              />
            </View>
            <View style={styles.signUp__content}>
              <Text style={styles.signUp__nameItems}>User Name</Text>
              <TextInput style={styles.signUp__input} value="Alex123" />
            </View>
            <View style={styles.signUp__content}>
              <Text style={styles.signUp__nameItems}>Date born</Text>
              <TextInput style={styles.signUp__input} value="23.04.2008" />
            </View>
            <View style={styles.signUp__content}>
              <Text style={styles.signUp__nameItems}>Country</Text>
              <TextInput style={styles.signUp__input} value="Usa" />
            </View>
            <View style={styles.signUp__content}>
              <Text style={styles.signUp__nameItems}>City</Text>
              <TextInput style={styles.signUp__input} value="New York" />
            </View>
            <View style={styles.signUp__bottomContent}>
              <Text style={styles.signUp__nameItems}>State</Text>
              <TextInput style={styles.signUp__input} value="New York" />
            </View>
          </View>
          <Text style={styles.signUp__subtitle}>Password</Text>
          <View style={styles.signUp__block}>
            <View style={styles.signUp__content}>
              <Text style={styles.signUp__nameItems}>Password</Text>
              <TextInput
                style={styles.signUp__input}
                value="New York"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.signUp__bottomContent}>
              <Text style={styles.signUp__nameItems}>Repeat password</Text>
              <TextInput
                style={styles.signUp__input}
                value="New York"
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text style={styles.signUp__description}>Description</Text>
          <TextInput style={styles.signUp__descriptionInput}></TextInput>
          <TextInput style={styles.signUp__descriptionInput}></TextInput>
          <TextInput style={styles.signUp__descriptionInput}></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
