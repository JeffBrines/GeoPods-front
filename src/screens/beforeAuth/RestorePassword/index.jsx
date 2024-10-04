// Basic Import
import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
// Component
import Button from '../../../components/button';
// Assets
import COLORS from '../../../assets/colors';
// Libraries
import {Formik} from 'formik';

function RestorePassword() {
  return (
    <SafeAreaView>
      <Text style={styles.restorePassword__title}>Restore Password</Text>
      <Text style={styles.restorePassword__subtitle}>
        We will send you a new password to this e-mail
      </Text>
      <Formik
        initialValues={{email: ''}}
        onSubmit={v => {
          console.log(v.email);
        }}
        // validateOnChange={false}
        validate={({email}) => {
          const errors = {};
          if (!email.length) {
            errors.email = 'This field is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = ' Incorrect e-mail';
          }
          return errors;
        }}>
        {({handleChange, handleSubmit, errors, values}) => (
          <View>
            <TextInput
              style={styles.restorePassword__email}
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder="E-mail"
              placeholderTextColor={COLORS.text.grey}
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Button
              text="Send"
              onPress={handleSubmit}
              customStyle={styles.btn}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default RestorePassword;
