import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface DocumentState {
  profilePhoto: {
    fileName: string | null;
    uploaded: boolean;
  };
  driversLicense: {
    fileName: string | null;
    uploaded: boolean;
  };
}

export default function UploadDocumentScreen() {
  const [documents, setDocuments] = useState<DocumentState>({
    profilePhoto: {
      fileName: 'dPcq4Col14ggET132-jpeg',
      uploaded: true,
    },
    driversLicense: {
      fileName: null,
      uploaded: false,
    },
  });

  const handleBack = () => {
    router.back();
  };

  const handleUploadFile = (type: 'profilePhoto' | 'driversLicense') => {
    console.log('Upload file for:', type);
  };

  const handleSubmit = () => {
    console.log('Submit documents');
    router.push('/auth/reviewing');
  };

  const DocumentUploadSection = ({ 
    title, 
    description, 
    type, 
    required = true 
  }: {
    title: string;
    description: string;
    type: 'profilePhoto' | 'driversLicense';
    required?: boolean;
  }) => {
    const documentData = documents[type];

    return (
      <View style={styles.documentSection}>
        <View style={styles.documentHeader}>
          <Text style={styles.documentTitle}>{title}</Text>
          {required && <Text style={styles.requiredText}>Required*</Text>}
        </View>
        
        <Text style={styles.documentDescription}>{description}</Text>
        
        <View style={styles.divider} />
        
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleUploadFile(type)}
          >
            <AntDesign name="plus" size={20} color="#FFFFFF" />
            <Text style={styles.uploadButtonText}>Upload File</Text>
          </TouchableOpacity>
          
          {documentData.uploaded && documentData.fileName && (
            <View style={styles.fileInfo}>
              <AntDesign name="file-text" size={16} color="#7C7B7B" />
              <Text style={styles.fileName}>{documentData.fileName}</Text>
            </View>
          )}
        </View>
      </View>
    );
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
        <Text style={styles.headerTitle}>Upload Document</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Provide all the Documents required for verification and wait for approval
          </Text>
        </View>

        {/* Document Upload Sections */}
        <DocumentUploadSection
          title="Profile Photo"
          description="Please provide a clear portrait picture of yourself. It should show your full face, front view, with eyes open."
          type="profilePhoto"
        />

        <DocumentUploadSection
          title="Driver's Licence"
          description="Please provide a clear Driver's license. It should show your full details clearly and show all edges"
          type="driversLicense"
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 21,
  },
  subtitleContainer: {
    marginBottom: 26,
    width: 390,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
    lineHeight: 16,
  },
  documentSection: {
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 16,
    padding: 21,
    marginBottom: 26,
  },
  documentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 13,
  },
  documentTitle: {
    fontSize: 12,
    fontFamily: 'Raleway',
    fontWeight: '500',
    color: '#000000',
  },
  requiredText: {
    fontSize: 8,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#FF0000',
  },
  documentDescription: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#707070',
    lineHeight: 12,
    marginBottom: 19,
    height: 36,
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginBottom: 19,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  uploadButtonText: {
    fontSize: 14,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  fileName: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#7C7B7B',
  },
  submitButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 120,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
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
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 25,
    textAlign: 'center',
  },
});
