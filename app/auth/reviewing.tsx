import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ReviewingScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleDone = () => {
    console.log('Documents under review, navigating to Go Online page');
    router.push('/go-online');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <View style={styles.backButtonCircle}>
            <AntDesign name="left" size={11} color="#100A37" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reviewing</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Icon Container */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1130_1925)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.0625 89.375C34.9193 92.203 30.0163 93.7088 25 93.6937C11.1875 93.6937 0 82.5062 0 68.6937C0 54.8812 11.1875 43.6937 25 43.6937C29.5468 43.6895 34.0086 44.9257 37.9049 47.2691C41.8013 49.6125 44.9846 52.9744 47.1121 56.9927C49.2395 61.0111 50.2306 65.5336 49.9784 70.0734C49.7263 74.6132 48.2406 78.9982 45.6813 82.7562L54.8688 91.9437C55.3038 92.3787 55.6488 92.8952 55.8842 93.4635C56.1197 94.0319 56.2408 94.641 56.2408 95.2562C56.2408 95.8714 56.1197 96.4806 55.8842 97.049C55.6488 97.6173 55.3038 98.1337 54.8688 98.5687C54.4337 99.0037 53.9173 99.3488 53.349 99.5842C52.7806 99.8196 52.1714 99.9408 51.5562 99.9408C50.9411 99.9408 50.3319 99.8196 49.7635 99.5842C49.1952 99.3488 48.6788 99.0037 48.2437 98.5687L39.0563 89.3812L39.0625 89.375ZM43.7625 68.6875C43.7625 79.0625 35.3875 87.4375 25.0125 87.4375C14.6375 87.4375 6.2625 79.0625 6.2625 68.6875C6.2625 58.3125 14.6375 49.9375 25.0125 49.9375C35.3875 49.9375 43.7625 58.3125 43.7625 68.6875Z"
                  fill="#B8DDFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.375 6.25C33.5462 6.25 32.7513 6.57924 32.1653 7.16529C31.5792 7.75134 31.25 8.5462 31.25 9.375V31.25C31.25 32.0788 30.9208 32.8737 30.3347 33.4597C29.7487 34.0458 28.9538 34.375 28.125 34.375C27.2962 34.375 26.5013 34.0458 25.9153 33.4597C25.3292 32.8737 25 32.0788 25 31.25H18.75C17.0924 31.25 15.5027 31.9085 14.3306 33.0806C13.1585 34.2527 12.5 35.8424 12.5 37.5C12.5 38.3288 12.1708 39.1237 11.5847 39.7097C10.9987 40.2958 10.2038 40.625 9.375 40.625C8.5462 40.625 7.75134 40.2958 7.16529 39.7097C6.57924 39.1237 6.25 38.3288 6.25 37.5C6.25 30.625 11.8438 25 18.75 25H25V9.375C25 6.8886 25.9877 4.50403 27.7459 2.74587C29.504 0.98772 31.8886 0 34.375 0L63.0625 0C65.55 0 67.9313 0.9875 69.6875 2.74375L78.5 11.5563C80.2564 13.3137 81.2432 15.6966 81.2438 18.1813V24.9938H87.4938C94.3688 24.9938 99.9938 30.5875 99.9938 37.4938V62.4938C99.9938 67.4813 97.0688 71.8063 92.8688 73.8063L99.3688 82.4938C99.717 82.958 99.929 83.5101 99.9811 84.0881C100.033 84.6661 99.9234 85.2472 99.6638 85.7663C99.4043 86.2854 99.0053 86.7219 98.5117 87.027C98.018 87.3321 97.4491 87.4938 96.8688 87.4938H65.6188C64.79 87.4938 63.9951 87.1645 63.409 86.5785C62.823 85.9924 62.4938 85.1976 62.4938 84.3688C62.4938 83.54 62.823 82.7451 63.409 82.159C63.9951 81.573 64.79 81.2438 65.6188 81.2438H90.6188L76.5563 62.4938H59.375C58.5462 62.4938 57.7513 62.1645 57.1653 61.5785C56.5792 60.9924 56.25 60.1976 56.25 59.3688C56.25 58.54 56.5792 57.7451 57.1653 57.159C57.7513 56.573 58.5462 56.2438 59.375 56.2438H78.125C78.6101 56.2438 79.0886 56.3567 79.5226 56.5737C79.9565 56.7906 80.3339 57.1056 80.625 57.4938L88.9375 68.5563C90.3072 68.2325 91.5276 67.456 92.401 66.3523C93.2744 65.2486 93.7497 63.8825 93.75 62.475V37.475C93.75 35.8174 93.0915 34.2277 91.9194 33.0556C90.7473 31.8835 89.1576 31.225 87.5 31.225H81.25V40.6C81.25 43.0864 80.2623 45.471 78.5041 47.2291C76.746 48.9873 74.3614 49.975 71.875 49.975H53.125C52.2962 49.975 51.5013 49.6458 50.9153 49.0597C50.3292 48.4737 50 47.6788 50 46.85C50 46.0212 50.3292 45.2263 50.9153 44.6403C51.5013 44.0542 52.2962 43.725 53.125 43.725H71.875C72.7038 43.725 73.4987 43.3958 74.0847 42.8097C74.6708 42.2237 75 41.4288 75 40.6V18.725H65.625C64.7962 18.725 64.0013 18.3958 63.4153 17.8097C62.8292 17.2237 62.5 16.4288 62.5 15.6V6.225H34.375V6.25Z"
                  fill="#B8DDFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1130_1925">
                  <rect width="100" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </View>
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}>
            Your Information are currently under{'\n'}Review
          </Text>
          <Text style={styles.description}>
            Please wait while we review your informations, you will be notified via email once your account has been reviewed.
          </Text>
        </View>
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 20,
    gap: 12,
    height: 64,
  },
  backButton: {
    padding: 0,
  },
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Raleway',
    color: '#000000',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    width: 195,
    height: 195,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 133, 255, 0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    gap: 20,
    width: 390,
  },
  mainTitle: {
    fontSize: 18,
    fontFamily: 'Raleway',
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#707070',
    textAlign: 'center',
    lineHeight: 22,
    width: 369,
  },
  doneButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 120,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 40,
    width: 365,
    height: 53,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  doneButtonText: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 25,
    textAlign: 'center',
  },
});
