import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { apiConfig } from '../../../api/config';
import { AnnouncementApi } from '../../../api/endpoints/announcement-api';
import NotificationBell from '../../../components/NotificationBell';
import { toast } from '../../../utils/toast';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US');
};

interface TaskItemProps {
  title: string;
  description: string;
  dueDate: string;
  actionText: string;
  onAction: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  dueDate,
  actionText,
  onAction,
}) => (
  <View style={styles.taskCard}>
    <View style={styles.taskContent}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
        <Text style={styles.taskDueDate}>{dueDate}</Text>
      </View>
      <Image
        source={require('../../../assets/images/mail.png')}
        style={styles.taskIcon}
        resizeMode="contain"
      />
    </View>
    <View style={styles.divider} />
    <Pressable onPress={onAction}>
      <Text style={styles.actionText}>{actionText}</Text>
    </Pressable>
  </View>
);

interface Announcement {
  id:            string   
  title:         string
  description:   string
  imageUrl:      string
  targetAudience: string[]
  isActive:      boolean
  sentAt:        string
  createdAt:     string
  updatedAt:     string
}


interface MessageItemProps {
  announcement: Announcement;
  isExpanded: boolean;
  onPress: () => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ announcement, isExpanded, onPress }) => (
  <Pressable style={styles.messageItem} onPress={onPress}>
    <View style={styles.messageContent}>
      <Text style={[styles.messageTitle, styles.unreadMessageTitle]}>
        {announcement.title || ''}
      </Text>
      <Text style={styles.messageDate}>{formatDate(announcement.createdAt!)}</Text>
      <Text style={styles.messageDescription} numberOfLines={isExpanded ? undefined : 1}>
        {announcement.description}
      </Text>
    </View>
    <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="#333333" />
  </Pressable>
);

const Inbox = () => {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedAnnouncementId, setExpandedAnnouncementId] = useState<string | null>(null);

  const announcementApi = useMemo(() => new AnnouncementApi(apiConfig), []);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const response  = await announcementApi.announcementsGet();
        setAnnouncements(response?.data || []);
      } catch (error: any) {
        toast.error('Failed to load messages.');
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, [announcementApi]);

  const handleGoBack = () => {
    router.back();
  };

  const handleReviewDocuments = () => {
    console.log('Review and sign documents');
  };

  const handleAnnouncementPress = (id: string) => {
    if (expandedAnnouncementId === id) {
      setExpandedAnnouncementId(null);
    } else {
      setExpandedAnnouncementId(id);
    }
  };

  // const tasks: TaskItemProps[] = [
  //   {
  //     title: 'Updated shopper paperwork',
  //     description: 'We updated our shopper paperwork. Please review and sign it to continue providing services.',
  //     dueDate: 'Due 8/4/12',
  //     actionText: 'Review and sign documents',
  //     onAction: handleReviewDocuments,
  //   },
  // ];

  // const messages: MessageItemProps[] = [
  //   {
  //     title: 'Important Alcohol Delivery Reminders',
  //     date: '7/18/25',
  //     isRead: true,
  //   },
  // ];

  return (
    <SafeAreaView style={styles.container} edges={['top','left','right']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="chevron-back" size={24} color="#100A37" />
          </Pressable>
          <Text style={styles.headerTitle}>Inbox</Text>
        </View>
        <View style={styles.headerRight}>
          <NotificationBell from="/inbox/inbox" />
          {/* <Pressable style={styles.cartButton} onPress={handleCart}>
            <ShoppingBasket width={20} height={20} stroke="#000" strokeWidth="0" />
          </Pressable> */}
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Tasks Section */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          {tasks.map((task, index) => (
            <TaskItem key={`${task.title}-${task.dueDate}-${index}`} {...task} />
          ))}
        </View> */}

        {/* Divider */}
        {/* <View style={styles.sectionDivider} /> */}

        {/* Messages Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.messagesContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#F48022" style={{ marginTop: 40 }} />
            ) : announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <View key={announcement.id || index}>
                  <MessageItem 
                    announcement={announcement} 
                    isExpanded={expandedAnnouncementId === announcement.id}
                    onPress={() => handleAnnouncementPress(announcement.id)}
                  />
                  {index < announcements.length - 1 && <View style={styles.messageDivider} />}
                </View>
              ))
            ) : (
              <Text style={styles.emptyMessageText}>You have no messages.</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
    color: '#000',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B4BED4',
    backgroundColor: 'transparent',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 21,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
    color: '#000',
    lineHeight: 25,
    marginBottom: 21,
  },
  taskCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#B4BED4',
    backgroundColor: '#FFF',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 25,
    marginBottom: 14,
  },
  taskInfo: {
    flex: 1,
    gap: 9,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'OpenSans-SemiBold',
    color: '#000',
    lineHeight: 16,
  },
  taskDescription: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
    lineHeight: 20,
  },
  taskDueDate: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'OpenSans-SemiBold',
    color: '#979797',
  },
  taskIcon: {
    width: 67,
    height: 67,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
    color: '#01891C',
    lineHeight: 16,
  },
  sectionDivider: {
    width: '90%',
    height: 1,
    backgroundColor: 'rgba(180, 190, 212, 0.5)',
    alignSelf: 'center',
    marginVertical: 27,
  },
  messagesContainer: {
    gap: 25,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageContent: {
    flex: 1,
    paddingRight: 10,
    gap: 2,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: '#555454ff',
    lineHeight: 25,
  },
  unreadMessageTitle: {
    fontWeight: '700',
    fontFamily: 'OpenSans-SemiBold',
  },
  messageDate: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
    lineHeight: 25,
  },
  messageDescription: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#7C7B7B',
    lineHeight: 20,
  },
  messageDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(180, 190, 212, 0.5)',
    marginTop: 25,
  },
  emptyMessageText: {
    textAlign: 'center',
    color: '#7C7B7B',
    marginTop: 40,
    fontFamily: 'OpenSans-Regular',
  },
});

export default Inbox;