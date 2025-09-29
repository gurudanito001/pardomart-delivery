import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SUPPORT_OPTIONS = [
  {
    id: 'chat',
    title: 'Live chat support',
    description: 'Get instant help from the operations team during deliveries.',
    icon: 'chatbubble-ellipses-outline' as const,
  },
  {
    id: 'call',
    title: 'Call dispatch',
    description: 'Speak directly with dispatch when you need adjustments.',
    icon: 'call-outline' as const,
  },
  {
    id: 'safety',
    title: 'Emergency safety line',
    description: 'Reach help immediately for urgent safety situations.',
    icon: 'shield-checkmark-outline' as const,
  },
];

const FAQ_ENTRIES = [
  {
    id: 'payment-cycle',
    question: 'When do I receive payouts?',
    answer: 'Earnings are processed daily at 9:00 PM and arrive in your connected bank account before noon the following day.',
  },
  {
    id: 'order-updates',
    question: 'How do I update customers about substitutions?',
    answer: 'Open the order, tap “Request substitution”, and choose an alternative. The customer receives an instant notification to approve or decline.',
  },
  {
    id: 'bag-policy',
    question: 'What is the shopping bag policy?',
    answer: 'Always use insulated bags for frozen goods and attach itemized receipts. Expect random audits from store partners.',
  },
];

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Support center</Text>
        <Text style={styles.subtitle}>Everything you need to keep deliveries running smoothly.</Text>
      </View>

      <FlatList
        data={SUPPORT_OPTIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.supportCard}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={20} color="#06888C" />
            </View>
            <View style={styles.supportDetails}>
              <Text style={styles.supportTitle}>{item.title}</Text>
              <Text style={styles.supportDescription}>{item.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#A0AEC0" />
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contact operations</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.faqSection}>
            <Text style={styles.sectionTitle}>Guides and answers</Text>
            {FAQ_ENTRIES.map((faq) => (
              <View key={faq.id} style={styles.faqCard}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              </View>
            ))}
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#F1FBFB',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 16,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  supportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E8F5F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  supportDetails: {
    flex: 1,
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  supportDescription: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  faqSection: {
    marginTop: 32,
    gap: 16,
  },
  faqCard: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FBFC',
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  faqAnswer: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
    lineHeight: 20,
  },
});
