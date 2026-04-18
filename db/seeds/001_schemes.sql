-- Seed: default welfare schemes

INSERT INTO schemes (name, category, description, eligibility) VALUES
(
  'Plot Allotment Scheme',
  'housing',
  'Affordable housing plots for police families in designated NPCWS layouts within Guntur district.',
  'Active members with 2+ years of membership in good standing'
),
(
  'Housing Construction Assistance',
  'housing',
  'Financial assistance and low-interest loans for construction on allotted plots.',
  'Members who have been allotted a plot under the Plot Allotment Scheme'
),
(
  'Medical Aid Fund',
  'health',
  'Emergency medical financial assistance for hospitalization and critical treatments.',
  'All active members and their immediate dependents'
),
(
  'Annual Health Camp',
  'health',
  'Free annual health check-up camps organized in collaboration with local hospitals.',
  'All NPCWS members and their families'
),
(
  'Children Scholarship Program',
  'education',
  'Merit-based scholarships for children of police personnel from Class 5 through post-graduation.',
  'Children of active members scoring above 75% in previous academic year'
),
(
  'School Supplies Grant',
  'education',
  'Annual grant for school uniforms, textbooks, and stationery for members'' children.',
  'All active members with school-going children'
);
