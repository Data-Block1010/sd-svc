# SecureData DApp - E-Identity and Data Verification

- **Backend Repo Link**: https://github.com/bytebenders1/backendnew

## Project Overview

SecureData DApp is a decentralized application (DApp) built using Next.js and Shadcn, designed for secure e-identity management and data verification. This DApp empowers users to securely store, verify, and manage their identity documents and sensitive data in a decentralized, user-controlled environment. Utilizing blockchain technology, Zero-Knowledge (zk) proofs, and Lisk Layer 2 (L2) networks, SecureData ensures enhanced privacy, security, and autonomy over users' data.

## Features

### E-Identity 

- **Identity Storage:**  
  Secure storage of identity documents like passports, driver’s licenses, and other identification on the Lisk network to ensure a tamper-proof environment.
  
- **Identity Verification:**  
  A Data Verification Contract is implemented to validate the authenticity of identity documents, employing Zero-Knowledge (zk) proofs to securely verify documents without revealing sensitive data.
  
- **Access Control:**  
  Access to identity documents is restricted to authorized users, safeguarding sensitive information and ensuring privacy.
  
- **Identity Management:**  
  Users can manage, update, and revoke their identity documents, maintaining full control over their personal information.

### Data Verification

- **Data Hashing:**  
  Hashes of sensitive data (e.g., personal and financial records) are stored on the L2 network to create a secure and immutable record.
  
- **Data Verification:**  
  The Data Verification Contract ensures that the stored data has not been altered, maintaining data integrity. Zero-Knowledge (zk) proofs allow third parties to verify the authenticity of documents without having direct access to the data itself.
  
- **Access Control:**  
  Access controls are implemented to guarantee that only authorized users can verify and access sensitive data.
  
- **Data Sharing:**  
  Users can securely share their verified data with customizable access controls, providing flexibility without compromising security.

## Benefits

- **Security:**  
  The DApp employs robust security mechanisms to protect sensitive data and identity documents.
  
- **Immutable Records:**  
  Blockchain technology ensures that all data is immutable, preserving data integrity.
  
- **Decentralized:**  
  Data storage is decentralized, reducing dependency on central authorities and improving security.
  
- **User-Controlled:**  
  Users maintain complete control over their identity documents and sensitive data.

- **Zero-Knowledge Verification:**  
  zk technology ensures that organizations can verify user data without exposing sensitive information, enhancing privacy.

## Design Focus

### UI Design

- **Simplicity and Clarity:**  
  The interface is clean, intuitive, and easy to navigate.
  
- **Secure Access:**  
  Login options are clearly marked, with 2FA (Two-Factor Authentication) for additional security.
  
- **Document Upload & Management:**  
  A straightforward process for uploading and managing documents, with progress indicators.
  
- **Data Verification Status:**  
  A clear presentation of the verification status with visual cues such as badges or checkmarks.
  
- **Access Controls:**  
  Intuitive drag-and-drop functionality for setting and managing access permissions.

### UX Design

- **User-Centric Flow:**  
  A seamless user journey that guides users through storing, verifying, and sharing data.
  
- **Immediate Feedback:**  
  Clear feedback on actions taken (e.g., document uploads, data verification).
  
- **Accessibility:**  
  Full support for screen readers, keyboard navigation, and mobile optimization.
  
- **Security Prompts:**  
  Integrated security prompts to educate users on best practices.

## Technologies Used

- **Next.js:** React-based framework for building fast, scalable applications.
- **Shadcn:** Modular and reusable components for building sleek UIs.
- **Lisk Layer 2 (L2) Blockchain:** Ensures decentralized, scalable, and tamper-proof storage for data.
- **Zero-Knowledge Proofs (zk):** Provides privacy-preserving verification for identity documents and data without revealing the data itself.
- **Data Verification Contracts:** Smart contracts for verifying identity and sensitive data.

## Live Deployment
We have successfully deployed the SecureData DApp on Fleek, a decentralized web hosting platform.

**Live DApp URL:** <https://secure-data.on-fleek.app>
Visit the live platform to explore the e-identity management and data verification features in action. Fleek ensures decentralized hosting for the DApp, maintaining high availability and scalability with seamless integration into the Web3 ecosystem.

## Potential Integrations

- **Government Services:** Integration with platforms for secure identity verification.
- **Financial Institutions:** Partnerships for secure verification of personal and financial data.
- **Healthcare Services:** Collaboration with healthcare providers for secure storage and verification of medical records.


## License

This project is licensed under the MIT License
