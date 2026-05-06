
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

/** 
 * CRITICAL: Test Connection to Firestore
 * As per instructions to ensure the client configuration is correct.
 */
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
if (typeof window !== 'undefined') {
  testConnection();
}

/**
 * OperationType enum for error handling
 */
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

/**
 * FirestoreErrorInfo interface for robust error reporting
 */
export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

/**
 * Standard Firestore Error Handler
 */
export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  const serializedError = JSON.stringify(errInfo);
  console.error('Firestore Error: ', serializedError);
  throw new Error(serializedError);
}

// Helper to check connection status
export const isOnline = () => {
  // Check for explicit override in Browser
  if (typeof window !== 'undefined') {
    const override = localStorage.getItem('MKS_REPO_MODE');
    if (override === 'LOCAL') return false;
    return navigator.onLine;
  }
  
  /**
   * On Server Side (Prerendering / SSG)
   * We default to OFFLINE during build to prevent hang/error.
   * If strictly needed for dynamic server routes, logic can be added here.
   */
  const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build' || process.env.NODE_ENV === 'production';
  
  if (isBuildPhase) return false;
  
  // Default server behavior: online (for system/CMS functions)
  return true;
};
