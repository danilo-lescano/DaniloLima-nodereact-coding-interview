import React from 'react';
import { Router } from '@reach/router';

import { Layout } from './components/layout/layout.component';
import { DashboardPage } from './pages/dashboard.page';

export function Routes() {
  return (
    <Layout>
      <Router>
        <DashboardPage path="/dashboard" default />
      </Router>
    </Layout>
  );
}
