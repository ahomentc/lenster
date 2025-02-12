import type { LensterPublication } from '@generated/lenstertypes';
import create from 'zustand';

interface GlobalModalState {
  showReportModal: boolean;
  reportPublication: LensterPublication | null;
  reportConfig: any;
  setShowReportModal: (
    showReportModal: boolean,
    reportPublication: LensterPublication | null,
    reportConfig?: any
  ) => void;
  showStatusModal: boolean;
  setShowStatusModal: (showStatusModal: boolean) => void;
}

export const useGlobalModalStateStore = create<GlobalModalState>((set) => ({
  showReportModal: false,
  reportPublication: null,
  reportConfig: null,
  setShowReportModal: (showReportModal, reportPublication, reportConfig) =>
    set(() => ({ showReportModal, reportPublication, reportConfig })),
  showStatusModal: false,
  setShowStatusModal: (showStatusModal) => set(() => ({ showStatusModal }))
}));
