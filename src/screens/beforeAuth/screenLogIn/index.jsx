// Basic Import
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

// Components
import Button from '../../../components/button';

// Assets
import COLORS from '../../../assets/colors';
import {logoApple} from '../../../assets/icons/logIn/logoApple';
import {logoGoogle} from '../../../assets/icons/logIn/logoGoogle';
import {logoFacebook} from '../../../assets/icons/logIn/logoFacebook';

// Libraries
import {Formik} from 'formik';

function ScreenLogIn() {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={v => {
          console.log(v.email);
          console.log(v.password);
        }}
        // validateOnChange={false}
        validate={({email, password}) => {
          const errors = {};
          if (!email.length) {
            errors.email = 'This field is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Incorrect e-mail';
          }
          if (!password.length) {
            errors.password = 'This field is required';
          } else if (password.length < 8) {
            errors.password = 'Password to week';
          }
          return errors;
        }}>
        {({handleChange, handleSubmit, errors, values}) => (
          <View style={styles.logIn}>
            <Text style={styles.logIn__title}>Log in</Text>
            <TextInput
              style={styles.logIn__email}
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder="E-mail"
              placeholderTextColor={COLORS.text.grey}
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.logIn__password}
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="Password"
              placeholderTextColor={COLORS.text.grey}
              secureTextEntry={true}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TouchableOpacity style={styles.logIn__button}>
              <Text style={styles.logIn__forgotText}>Forgot password?</Text>
            </TouchableOpacity>
            <Button
              onPress={handleSubmit}
              text="Log in"
              customStyle={styles.btnLogIn}
            />

            <Button
              text="Log in Apple ID"
              icon={logoApple}
              customStyle={styles.btnApple}
            />
            <Button
              text="Log in Google"
              icon={logoGoogle}
              customStyle={styles.btnGoogle}
              customTextStyles={styles.btnText}
            />
            <Button
              text="Log in Facebook"
              icon={logoFacebook}
              customStyle={styles.btnFacebook}
            />
            <TouchableOpacity>
              <Text style={styles.logIn__text}> Sign up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default ScreenLogIn;
