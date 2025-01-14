'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const DashboardProviders = ({ children }) => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#42599d"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  )
};

