import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { MenuButton, NotificationSVG, SupportSVG } from '../../../components';
import Svg, { Path, Rect, Ellipse } from 'react-native-svg';

const ShoppingBagIcon = () => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.08443 4.6875H16.9157C17.4907 4.68754 18.0457 4.89898 18.475 5.28158C18.9042 5.66419 19.1779 6.19126 19.2438 6.7625L20.5063 17.7C20.5442 18.0283 20.5122 18.3608 20.4125 18.6759C20.3128 18.9909 20.1476 19.2814 19.9278 19.5281C19.7079 19.7748 19.4384 19.9722 19.1369 20.1074C18.8353 20.2426 18.5086 20.3125 18.1782 20.3125H6.82193C6.49148 20.3125 6.16477 20.2426 5.86324 20.1074C5.56171 19.9722 5.29218 19.7748 5.07232 19.5281C4.85247 19.2814 4.68728 18.9909 4.58757 18.6759C4.48787 18.3608 4.45592 18.0283 4.49381 17.7L5.75631 6.7625C5.82225 6.19126 6.09589 5.66419 6.52517 5.28158C6.95444 4.89898 7.5094 4.68754 8.08443 4.6875ZM7.81256 8.20312C7.81256 7.89232 7.93602 7.59425 8.15579 7.37448C8.37556 7.15472 8.67363 7.03125 8.98443 7.03125C9.29523 7.03125 9.59331 7.15472 9.81308 7.37448C10.0328 7.59425 10.1563 7.89232 10.1563 8.20312V8.59375C10.1563 9.21535 10.4032 9.81149 10.8428 10.251C11.2823 10.6906 11.8785 10.9375 12.5001 10.9375C13.1217 10.9375 13.7178 10.6906 14.1573 10.251C14.5969 9.81149 14.8438 9.21535 14.8438 8.59375V8.20312C14.8438 7.89232 14.9673 7.59425 15.187 7.37448C15.4068 7.15472 15.7049 7.03125 16.0157 7.03125C16.3265 7.03125 16.6246 7.15472 16.8443 7.37448C17.0641 7.59425 17.1876 7.89232 17.1876 8.20312V8.59375C17.1876 9.83695 16.6937 11.0292 15.8146 11.9083C14.9355 12.7874 13.7433 13.2812 12.5001 13.2812C11.2569 13.2812 10.0646 12.7874 9.1855 11.9083C8.30642 11.0292 7.81256 9.83695 7.81256 8.59375V8.20312Z"
      fill="#0085FF"
    />
  </Svg>
);

const MessageIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Rect width={30} height={30} rx={15} fill="#0085FF" />
    <Path
      d="M15 8.925C18.7125 8.925 21.75 11.3415 21.75 14.325C21.75 17.3085 18.7125 19.725 15 19.725C14.163 19.725 13.3598 19.6035 12.6173 19.3875C10.6463 21.075 8.25 21.075 8.25 21.075C9.82275 19.5023 10.0725 18.4425 10.1063 18.0375C8.95875 17.0723 8.25 15.7628 8.25 14.325C8.25 11.3415 11.2875 8.925 15 8.925Z"
      fill="white"
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Rect x={0.5} y={0.5} width={29} height={29} rx={14.5} stroke="#0085FF" />
    <Path
      d="M18.1618 20.2498C17.7043 20.2498 17.0616 20.0843 16.0993 19.5467C14.929 18.8904 14.0239 18.2845 12.86 17.1237C11.7378 16.0022 11.1917 15.2761 10.4274 13.8853C9.56395 12.315 9.71114 11.4919 9.87567 11.1401C10.0716 10.7196 10.3608 10.4681 10.7347 10.2185C10.947 10.0794 11.1717 9.96016 11.4059 9.86228C11.4293 9.8522 11.4511 9.8426 11.4706 9.83392C11.5866 9.78166 11.7624 9.70267 11.985 9.78705C12.1336 9.84283 12.2663 9.95697 12.4739 10.162C12.8998 10.582 13.4818 11.5174 13.6964 11.9768C13.8406 12.2864 13.936 12.4908 13.9362 12.72C13.9362 12.9884 13.8012 13.1953 13.6374 13.4187C13.6067 13.4606 13.5762 13.5007 13.5467 13.5396C13.3683 13.774 13.3292 13.8417 13.355 13.9627C13.4072 14.2057 13.797 14.9292 14.4375 15.5684C15.0781 16.2075 15.7807 16.5727 16.0247 16.6247C16.1508 16.6517 16.22 16.6109 16.4618 16.4262C16.4965 16.3997 16.5322 16.3723 16.5694 16.3449C16.8193 16.159 17.0166 16.0275 17.2786 16.0275H17.28C17.5081 16.0275 17.7033 16.1264 18.0268 16.2895C18.4486 16.5024 19.4122 17.0768 19.8347 17.5031C20.0403 17.7103 20.1549 17.8425 20.2109 17.9909C20.2953 18.2142 20.2158 18.3893 20.164 18.5065C20.1554 18.526 20.1457 18.5473 20.1357 18.571C20.037 18.8048 19.9171 19.029 19.7773 19.2408C19.5282 19.6135 19.2757 19.902 18.8543 20.0981C18.638 20.2005 18.4011 20.2524 18.1618 20.2498Z"
      fill="black"
    />
  </Svg>
);

const CopyIcon = () => (
  <Svg width={16} height={17} viewBox="0 0 16 17" fill="none">
    <Path
      d="M13 1.0249H4.625C4.55625 1.0249 4.5 1.08115 4.5 1.1499V2.0249C4.5 2.09365 4.55625 2.1499 4.625 2.1499H12.375V12.8999C12.375 12.9687 12.4312 13.0249 12.5 13.0249H13.375C13.4438 13.0249 13.5 12.9687 13.5 12.8999V1.5249C13.5 1.24834 13.2766 1.0249 13 1.0249ZM11 3.0249H3C2.72344 3.0249 2.5 3.24834 2.5 3.5249V11.8171C2.5 11.9499 2.55312 12.0765 2.64687 12.1702L5.35469 14.878C5.38906 14.9124 5.42813 14.9405 5.47031 14.964V14.9937H5.53594C5.59062 15.014 5.64844 15.0249 5.70781 15.0249H11C11.2766 15.0249 11.5 14.8015 11.5 14.5249V3.5249C11.5 3.24834 11.2766 3.0249 11 3.0249ZM5.46875 13.403L4.12344 12.0562H5.46875V13.403ZM10.375 13.8999H6.46875V11.6812C6.46875 11.3358 6.18906 11.0562 5.84375 11.0562H3.625V4.1499H10.375V13.8999Z"
      fill="black"
    />
  </Svg>
);

const ClockIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 13 13" fill="none">
    <Path
      d="M6.5 1.0249C3.743 1.0249 1.5 3.2679 1.5 6.0249C1.5 8.7819 3.743 11.0249 6.5 11.0249C9.257 11.0249 11.5 8.7819 11.5 6.0249C11.5 3.2679 9.257 1.0249 6.5 1.0249ZM6.5 10.0249C4.2945 10.0249 2.5 8.2304 2.5 6.0249C2.5 3.8194 4.2945 2.0249 6.5 2.0249C8.7055 2.0249 10.5 3.8194 10.5 6.0249C10.5 8.2304 8.7055 10.0249 6.5 10.0249Z"
      fill="#7C7B7B"
    />
    <Path d="M7 3.5249H6V6.5249H9V5.5249H7V3.5249Z" fill="#7C7B7B" />
  </Svg>
);

const CalendarIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 13 13" fill="none">
    <Path
      d="M4.75 7.0249C4.91576 7.0249 5.07473 6.95905 5.19194 6.84184C5.30915 6.72463 5.375 6.56566 5.375 6.3999C5.375 6.23414 5.30915 6.07517 5.19194 5.95796C5.07473 5.84075 4.91576 5.7749 4.75 5.7749C4.58424 5.7749 4.42527 5.84075 4.30806 5.95796C4.19085 6.07517 4.125 6.23414 4.125 6.3999C4.125 6.56566 4.19085 6.72463 4.30806 6.84184C4.42527 6.95905 4.58424 7.0249 4.75 7.0249ZM4.75 8.7749C4.91576 8.7749 5.07473 8.70905 5.19194 8.59184C5.30915 8.47463 5.375 8.31566 5.375 8.1499C5.375 7.98414 5.30915 7.82517 5.19194 7.70796C5.07473 7.59075 4.91576 7.5249 4.75 7.5249C4.58424 7.5249 4.42527 7.59075 4.30806 7.70796C4.19085 7.82517 4.125 7.98414 4.125 8.1499C4.125 8.31566 4.19085 8.47463 4.30806 8.59184C4.42527 8.70905 4.58424 8.7749 4.75 8.7749ZM7.125 6.3999C7.125 6.56566 7.05915 6.72463 6.94194 6.84184C6.82473 6.95905 6.66576 7.0249 6.5 7.0249C6.33424 7.0249 6.17527 6.95905 6.05806 6.84184C5.94085 6.72463 5.875 6.56566 5.875 6.3999C5.875 6.23414 5.94085 6.07517 6.05806 5.95796C6.17527 5.84075 6.33424 5.7749 6.5 5.7749C6.66576 5.7749 6.82473 5.84075 6.94194 5.95796C7.05915 6.07517 7.125 6.23414 7.125 6.3999ZM6.5 8.7749C6.66576 8.7749 6.82473 8.70905 6.94194 8.59184C7.05915 8.47463 7.125 8.31566 7.125 8.1499C7.125 7.98414 7.05915 7.82517 6.94194 7.70796C6.82473 7.59075 6.66576 7.5249 6.5 7.5249C6.33424 7.5249 6.17527 7.59075 6.05806 7.70796C5.94085 7.82517 5.875 7.98414 5.875 8.1499C5.875 8.31566 5.94085 8.47463 6.05806 8.59184C6.17527 8.70905 6.33424 8.7749 6.5 8.7749ZM8.875 6.3999C8.875 6.56566 8.80915 6.72463 8.69194 6.84184C8.57473 6.95905 8.41576 7.0249 8.25 7.0249C8.08424 7.0249 7.92527 6.95905 7.80806 6.84184C7.69085 6.72463 7.625 6.56566 7.625 6.3999C7.625 6.23414 7.69085 6.07517 7.80806 5.95796C7.92527 5.84075 8.08424 5.7749 8.25 5.7749C8.41576 5.7749 8.57473 5.84075 8.69194 5.95796C8.80915 6.07517 8.875 6.23414 8.875 6.3999Z"
      fill="#7C7B7B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 1.6499C4.59946 1.6499 4.69484 1.68941 4.76516 1.75974C4.83549 1.83006 4.875 1.92545 4.875 2.0249V2.3999H8.125V2.0249C8.125 1.92545 8.16451 1.83006 8.23484 1.75974C8.30516 1.68941 8.40054 1.6499 8.5 1.6499C8.59946 1.6499 8.69484 1.68941 8.76517 1.75974C8.83549 1.83006 8.875 1.92545 8.875 2.0249V2.4039C8.951 2.4059 9.02183 2.40957 9.0875 2.4149C9.2775 2.4299 9.4555 2.4639 9.624 2.5499C9.88278 2.68174 10.0932 2.89213 10.225 3.1509C10.311 3.3194 10.345 3.4974 10.36 3.6874C10.375 3.8699 10.375 4.0924 10.375 4.3599V8.1899C10.375 8.4574 10.375 8.6799 10.36 8.8624C10.345 9.0524 10.311 9.2304 10.225 9.3989C10.0933 9.6576 9.88309 9.86798 9.6245 9.9999C9.4555 10.0859 9.2775 10.1199 9.0875 10.1349C8.905 10.1499 8.6825 10.1499 8.4155 10.1499H4.585C4.3175 10.1499 4.095 10.1499 3.9125 10.1349C3.7225 10.1199 3.5445 10.0859 3.376 9.9999C3.11738 9.86833 2.90701 9.65831 2.775 9.3999C2.689 9.2309 2.655 9.0529 2.64 8.8629C2.625 8.6804 2.625 8.4579 2.625 8.1909V4.3599C2.625 4.0924 2.625 3.8699 2.64 3.6874C2.655 3.4974 2.689 3.3194 2.775 3.1509C2.90684 2.89213 3.11722 2.68174 3.376 2.5499C3.5445 2.4639 3.7225 2.4299 3.9125 2.4149C3.97817 2.40957 4.049 2.4059 4.125 2.4039V2.0249C4.125 1.97566 4.1347 1.92689 4.15355 1.8814C4.17239 1.8359 4.20001 1.79456 4.23483 1.75974C4.26966 1.72492 4.311 1.69729 4.35649 1.67845C4.40199 1.6596 4.45075 1.6499 4.5 1.6499Z"
      fill="#7C7B7B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.375 3.8999C5.375 3.80045 5.41451 3.70506 5.48484 3.63474C5.55516 3.56441 5.65054 3.5249 5.75 3.5249H7.25C7.34946 3.5249 7.44484 3.56441 7.51516 3.63474C7.58549 3.70506 7.625 3.80045 7.625 3.8999C7.625 3.99936 7.58549 4.09474 7.51516 4.16507C7.44484 4.23539 7.34946 4.2749 7.25 4.2749H5.75C5.65054 4.2749 5.55516 4.23539 5.48484 4.16507C5.41451 4.09474 5.375 3.99936 5.375 3.8999Z"
      fill="#7C7B7B"
    />
  </Svg>
);

const ProgressLine = () => (
  <Svg width={244} height={17} viewBox="0 0 244 17" fill="none">
    <Ellipse
      cx={8.1669}
      cy={8.00003}
      rx={8.1669}
      ry={8.00003}
      transform="matrix(0.999999 -0.00151211 -0.00120656 0.999999 0.140625 0.0248528)"
      fill="#2CAF0B"
    />
    <Rect width={211} height={2} transform="translate(16.5 7.01253)" fill="#D9D9D9" />
    <Ellipse
      cx={8.1669}
      cy={8.00003}
      rx={8.1669}
      ry={8.00003}
      transform="matrix(0.999999 -0.00151211 -0.00120656 0.999999 227.543 0.0248528)"
      fill="#B4BED4"
    />
  </Svg>
);

const BackArrowIcon = () => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
    <Path
      d="M8.325 13.5L13.925 19.1L12.5 20.5L4.5 12.5L12.5 4.5L13.925 5.9L8.325 11.5H20.5V13.5H8.325Z"
      fill="white"
    />
  </Svg>
);

interface ShoppingItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: string;
  isPerishable: boolean;
}

interface ItemCategory {
  name: string;
  items: ShoppingItem[];
}

export default function OrderPreviewScreen() {
  const categories: ItemCategory[] = [
    {
      name: 'Meat',
      items: [
        {
          id: '1',
          name: 'Tyson All natural chicken freshwings, family pack, 4.25-3.5lb Tray',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/63f1ba43866c14d9b7ec4aeb2941bb00c04b7d4c?width=104',
          quantity: 2,
          price: '$3.34',
          isPerishable: true,
        },
        {
          id: '2',
          name: 'Tyson All natural chicken freshwings, family pack, 4.25-3.5lb Tray',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/63f1ba43866c14d9b7ec4aeb2941bb00c04b7d4c?width=104',
          quantity: 2,
          price: '$3.34',
          isPerishable: true,
        },
      ],
    },
    {
      name: 'Wal Deli',
      items: [
        {
          id: '3',
          name: 'Tyson All natural chicken freshwings, family pack, 4.25-3.5lb Tray',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8e31a39f95ad8a07cdcfb9245798e545b674e5b?width=96',
          quantity: 2,
          price: '$3.34',
          isPerishable: true,
        },
        {
          id: '4',
          name: 'Tyson All natural chicken freshwings, family pack, 4.25-3.5lb Tray',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/9163f624e8c0af4229d79bbd17692fd7d6ea4de5?width=86',
          quantity: 2,
          price: '$3.34',
          isPerishable: true,
        },
      ],
    },
  ];

  const handleAcceptOrder = () => {
    router.push('/orders/start-trip');
  };

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      {/* Fixed Map Background and Header */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/3619225119bd10f6a1c9579a1f7e6b81d11749d1?width=860' }}
          style={styles.mapImage}
          resizeMode="cover"
        />
        
        {/* Header Icons */}
        <SafeAreaView style={styles.headerSafeArea}>
          <View style={styles.header}>
            <MenuButton />
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconButton}>
                <NotificationSVG width={22} height={22} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <SupportSVG width={24} height={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>

      {/* Scrollable Content Card */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentCard}>
          {/* Bar indicator */}
          <View style={styles.barIndicator} />

          {/* Delivery Details Header */}
          <View style={styles.deliveryHeaderContainer}>
            <Text style={styles.deliveryTitle}>Delivery details</Text>
            <View style={styles.deliveryBadge}>
              <ShoppingBagIcon />
              <Text style={styles.badgeText}>Shop and Deliver</Text>
            </View>
          </View>

          {/* Customer Details Card */}
          <View style={styles.customerCard}>
            <View style={styles.customerHeader}>
              <View style={styles.customerInfo}>
                <Image
                  source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/e8982379bf4437085e115a280c121ce36487d5e0?width=60' }}
                  style={styles.avatar}
                />
                <Text style={styles.customerName}>Mr Damilare Adebanjo</Text>
              </View>
              <View style={styles.contactIcons}>
                <MessageIcon />
                <PhoneIcon />
              </View>
            </View>

            <View style={styles.divider} />

            {/* Total Section */}
            <View style={styles.totalSection}>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Estimated Total</Text>
                <Text style={styles.totalAmount}>$120.60</Text>
              </View>
              <View style={styles.costBreakdown}>
                <View style={styles.costRow}>
                  <Text style={styles.costLabel}>Item Cost</Text>
                  <Text style={styles.costValue}>$100.00</Text>
                </View>
                <View style={styles.costRow}>
                  <Text style={styles.costLabel}>Shopping Fee</Text>
                  <Text style={styles.costValue}>$20.32</Text>
                </View>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Progress Section */}
            <View style={styles.progressSection}>
              <Text style={styles.progressText}>4.5 Miles - 20 Items</Text>
              <View style={styles.progressBar}>
                <ProgressLine />
              </View>
              <View style={styles.addressRow}>
                <View style={styles.addressLeft}>
                  <Text style={styles.addressName}>Mr Damilare Adebanjo</Text>
                  <View style={styles.dateTimeRow}>
                    <View style={styles.dateTimeItem}>
                      <ClockIcon />
                      <Text style={styles.dateTimeText}>12:00pm</Text>
                    </View>
                    <View style={styles.dateTimeItem}>
                      <CalendarIcon />
                      <Text style={styles.dateTimeText}>03/2025</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.addressRight}>
                  <Text style={styles.addressLine}>47 North Union Avenue</Text>
                  <Text style={styles.addressCity}>Chicago Illiniou, 60612, US</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Order Code */}
          <View style={styles.orderCodeSection}>
            <Text style={styles.orderCode}>Order code - 987BNTT43</Text>
            <CopyIcon />
          </View>

          {/* Store Info */}
          <View style={styles.storeCard}>
            <View style={styles.storeInfo}>
              <Image
                source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/dbf8d1142bcb6b2582427f0f75f675f0cd1e0a16?width=66' }}
                style={styles.storeLogo}
              />
              <View style={styles.storeDetails}>
                <Text style={styles.storeName}>Jewel Osco</Text>
                <Text style={styles.storeAddress}>Wesside 120 ny jersey 2.5 Miles</Text>
              </View>
            </View>
            <View style={styles.storeActions}>
              <MessageIcon />
              <PhoneIcon />
            </View>
          </View>

          {/* Shopping Items */}
          <View style={styles.shoppingSection}>
            <View style={styles.shoppingHeader}>
              <Text style={styles.shoppingLabel}>SHOPPING ITEMS</Text>
              <Text style={styles.itemCount}>20 ITEMS</Text>
            </View>

            {categories.map((category) => (
              <View key={category.name} style={styles.categorySection}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <View style={styles.itemsList}>
                  {category.items.map((item, index) => (
                    <View
                      key={item.id}
                      style={[
                        styles.itemCard,
                        index === 0 && styles.itemCardFirst,
                        index === category.items.length - 1 && styles.itemCardLast,
                      ]}
                    >
                      <Image source={{ uri: item.image }} resizeMode='contain' style={styles.itemImage} />
                      <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <View style={styles.itemFooter}>
                          {item.isPerishable && (
                            <View style={styles.perishableBadge}>
                              <Text style={styles.perishableText}>Perishable</Text>
                            </View>
                          )}
                          <View style={styles.itemPricing}>
                            <Text style={styles.itemQuantity}>qty {item.quantity}</Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptOrder}>
              <Text style={styles.acceptButtonText}>Accept Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <BackArrowIcon />
              <Text style={styles.backButtonText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mapContainer: {
    height: 200,
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  headerSafeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
    paddingTop: 10,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginTop: -40,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  contentCard: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 19,
    paddingTop: 16,
    paddingBottom: 40,
  },
  barIndicator: {
    width: 70,
    height: 5,
    backgroundColor: '#EEE',
    alignSelf: 'center',
    borderRadius: 3,
    marginBottom: 17,
  },
  deliveryHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
    backgroundColor: '#D9EDFF',
    paddingVertical: 12,
    paddingHorizontal: 13,
    borderRadius: 8,
  },
  deliveryTitle: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#000',
  },
  deliveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  badgeText: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
  },
  customerCard: {
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  customerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  customerName: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
  },
  contactIcons: {
    flexDirection: 'row',
    gap: 13,
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: 16,
  },
  totalSection: {
    gap: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#484C52',
  },
  totalAmount: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#100A37',
  },
  costBreakdown: {
    gap: 4,
    marginTop: 4,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costLabel: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#707070',
  },
  costValue: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#313131',
  },
  progressSection: {
    gap: 10,
  },
  progressText: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
    textAlign: 'center',
  },
  progressBar: {
    alignItems: 'center',
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  addressLeft: {
    gap: 4,
  },
  addressName: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#484C52',
  },
  dateTimeRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dateTimeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  dateTimeText: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#7C7B7B',
  },
  addressRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  addressLine: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#484C52',
    textAlign: 'right',
  },
  addressCity: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
    textAlign: 'right',
  },
  orderCodeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 17,
  },
  orderCode: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
  },
  storeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B4BED4',
    borderRadius: 16,
    padding: 17,
    marginBottom: 17,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  storeLogo: {
    width: 33,
    height: 33,
    borderRadius: 17,
  },
  storeDetails: {
    gap: 2,
  },
  storeName: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
  },
  storeAddress: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
  },
  storeActions: {
    flexDirection: 'row',
    gap: 10,
  },
  shoppingSection: {
    backgroundColor: '#EDF7FF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#B4BED4',
    padding: 18,
    marginBottom: 24,
  },
  shoppingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  shoppingLabel: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
  },
  itemCount: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
  },
  categorySection: {
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  itemsList: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    backgroundColor: '#FFF',
    padding: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  itemCardFirst: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  itemCardLast: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomWidth: 0,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    gap: 6,
  },
  itemName: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#484C52',
    lineHeight: 18,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  perishableBadge: {
    backgroundColor: 'rgba(191, 227, 198, 0.50)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  perishableText: {
    fontSize: 6,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#01891C',
    lineHeight: 18,
  },
  itemPricing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemQuantity: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#7C7B7B',
    lineHeight: 18,
  },
  itemPrice: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
    lineHeight: 18,
  },
  actionButtons: {
    gap: 17,
  },
  acceptButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  acceptButtonText: {
    fontSize: 20,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#FFF',
    lineHeight: 25,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#BBB',
    borderRadius: 16,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  backButtonText: {
    fontSize: 20,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#FFF',
    lineHeight: 25,
  },
});
