# RescuEd Platform Architecture v2.0

## Core Philosophy

**Education built by providers, for providers.** Every architectural decision serves one purpose: helping EMS professionals become better at their jobs through accessible, practical, and professional-grade education.

### Design Principles
1. **Freedom to Learn** - No artificial barriers between users and knowledge
2. **Purpose-Driven Compliance** - Regulatory requirements where needed, not everywhere
3. **Single Source of Truth** - One content system, multiple consumption modes
4. **Provider-Centric** - Built for working EMTs and Paramedics, not corporate training departments

---

## User Architecture

### Target Users
- **Working EMS Providers** - EMT-B through Critical Care Paramedic
- **Career-Focused Learners** - Providers seeking advancement
- **Small Teams** - Departments that learn together (3-15 people)

### User Types & Subscriptions

```typescript
UserSubscription = {
  'basic': {
    price: 19, // monthly
    features: [
      'All content access',
      'CE tracking & certificates', 
      'Mobile learning',
      'Community access',
      'Progress analytics'
    ]
  },
  'pro': {
    price: 39, // monthly
    features: [
      'Everything in Basic',
      'Advanced progress analytics',
      'Early access to new content',
      'Monthly 1-on-1 check-ins',
      'Career development tools',
      'Personalized learning paths'
    ]
  },
  'team': {
    price: 29, // per user monthly, min 3 users
    features: [
      'Everything in Pro',
      'Team progress dashboard',
      'Group discussions',
      'Shared learning goals',
      'Team reporting',
      'Bulk enrollment'
    ]
  }
}
```

### User Profile Schema

```typescript
interface User {
  id: string
  email: string
  username: string
  
  // Certification Info
  primary_certification: 'EMT-B' | 'AEMT' | 'EMTI' | 'EMTP' | 'CCPC'
  additional_certifications: string[]
  renewal_date: Date
  state_of_practice?: string // Future feature
  
  // Learning Preferences
  learning_goals: string[]
  preferred_formats: ('video' | 'interactive' | 'audio' | 'text')[]
  availability_schedule?: 'day_shift' | 'night_shift' | 'mixed' | 'part_time'
  
  // Subscription & Status
  subscription_type: 'basic' | 'pro' | 'team'
  subscription_status: 'active' | 'trial' | 'cancelled'
  trial_end_date?: Date
  team_id?: string
  
  // Progress & Analytics
  total_ce_hours_earned: number
  courses_completed: number
  current_streak_days: number
  last_active: Date
  
  created_at: Date
  updated_at: Date
}
```

---

## Content Architecture

### Core Principle: Content Independence
**Content is content.** The same high-quality course serves multiple purposes:
- Casual learning (freedom to explore)
- CE credit (compliance-locked)
- Exam preparation (focused practice)
- Team training (collaborative learning)

### Content Hierarchy

```
Learning Path
├── Course (1-4 hours, comprehensive topic)
│   ├── Module (15-45 min, focused subtopic)
│   │   ├── Lesson (3-15 min, specific concept)
│   │   ├── Interactive Activity (5-20 min)
│   │   └── Knowledge Check (2-5 min)
│   └── Course Assessment (10-30 min)
└── Standalone Resources
    ├── Quick References
    ├── Calculators/Tools
    └── Case Studies
```

### Content Schema

```typescript
interface Content {
  id: string
  title: string
  description: string
  type: 'course' | 'module' | 'lesson' | 'assessment' | 'resource'
  
  // Classification
  certification_levels: ('EMT-B' | 'AEMT' | 'EMTI' | 'EMTP' | 'CCPC')[]
  ce_category: NREMT_Category
  ce_hours: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  
  // Content Structure
  modules?: Module[]
  duration_minutes: number
  prerequisites?: string[]
  learning_objectives: string[]
  
  // Compliance & Quality
  last_updated: Date
  next_review_date: Date
  medical_director_approved: boolean
  sme_reviewer: string // Subject Matter Expert
  
  // Engagement
  average_rating: number
  completion_rate: number
  practical_applications: string[]
  
  created_at: Date
  updated_at: Date
}

interface Module {
  id: string
  title: string
  type: 'video' | 'interactive' | 'text' | 'audio' | 'assessment'
  duration_minutes: number
  content_url?: string
  transcript?: string
  required_for_ce: boolean // Critical for compliance
  can_skip_in_casual: boolean
  order_index: number
}

enum NREMT_Category {
  AIRWAY_VENTILATION = 'Airway, Ventilation, and Oxygenation',
  CARDIOLOGY_RESUSCITATION = 'Cardiology and Resuscitation',
  TRAUMA = 'Trauma',
  MEDICAL_OB_PEDIATRICS = 'Medical/OB/Pediatrics', 
  EMS_OPERATIONS = 'EMS Operations',
  INDIVIDUAL_CHOICE = 'Individual/Instructor Choice'
}
```

---

## Learning Mode Architecture

### The Core Innovation: Flexible Consumption

Users choose how to engage with content based on their current need:

```typescript
enum LearningMode {
  CASUAL = 'casual',           // Just learning, no restrictions
  CE_CREDIT = 'ce_credit',     // Locked down for compliance
  EXAM_PREP = 'exam_prep',     // Focused practice
  TEAM_TRAINING = 'team'       // Collaborative learning
}

interface LearningSession {
  id: string
  user_id: string
  content_id: string
  mode: LearningMode
  
  // Session State
  started_at: Date
  completed_at?: Date
  last_activity: Date
  current_module_id?: string
  
  // Progress Tracking
  modules_completed: string[]
  time_spent_minutes: number
  assessment_scores: { module_id: string, score: number }[]
  
  // Compliance (CE Mode Only)
  ce_eligible: boolean
  compliance_violations: string[] // If any rules broken
  certificate_id?: string
  
  // Analytics
  pause_count: number
  rewind_count: number
  speed_adjustments: number
  notes_taken: number
  
  created_at: Date
  updated_at: Date
}
```

### Mode Behaviors

```typescript
const LearningModeRules = {
  [LearningMode.CASUAL]: {
    can_skip_modules: true,
    can_pause_indefinitely: true,
    assessments_required: false,
    time_tracking: 'basic',
    grants_ce_credit: false,
    session_timeout: null,
    playback_speed_control: true,
    note_taking: true
  },
  
  [LearningMode.CE_CREDIT]: {
    can_skip_modules: false, // Must complete all required modules
    can_pause_indefinitely: false,
    assessments_required: true,
    minimum_score: 80,
    time_tracking: 'strict',
    grants_ce_credit: true,
    session_timeout: 30, // minutes
    playback_speed_control: false, // Or limited to 1.25x max
    note_taking: true,
    anti_cheating: {
      tab_switch_detection: true,
      window_focus_tracking: true,
      maximum_violations: 3
    }
  },
  
  [LearningMode.EXAM_PREP]: {
    can_skip_modules: true,
    can_pause_indefinitely: true,
    assessments_required: false,
    focused_practice: true,
    weak_area_identification: true,
    time_tracking: 'detailed',
    grants_ce_credit: false,
    adaptive_learning: true,
    performance_analytics: true
  },
  
  [LearningMode.TEAM_TRAINING]: {
    can_skip_modules: false,
    can_pause_indefinitely: true,
    assessments_required: true,
    time_tracking: 'detailed',
    grants_ce_credit: true, // If completed properly
    discussion_threads: true,
    shared_progress: true,
    group_assessments: true
  }
}
```

---

## Progress & Analytics Architecture

### User Progress Schema

```typescript
interface UserProgress {
  user_id: string
  
  // Overall Stats
  total_learning_time_minutes: number
  total_courses_completed: number
  current_learning_streak: number
  longest_learning_streak: number
  
  // CE Tracking
  current_ce_hours: {
    [NREMT_Category.AIRWAY_VENTILATION]: number,
    [NREMT_Category.CARDIOLOGY_RESUSCITATION]: number,
    [NREMT_Category.TRAUMA]: number,
    [NREMT_Category.MEDICAL_OB_PEDIATRICS]: number,
    [NREMT_Category.EMS_OPERATIONS]: number,
    [NREMT_Category.INDIVIDUAL_CHOICE]: number,
    total: number
  },
  
  // Learning Analytics
  preferred_learning_times: string[], // ['morning', 'evening']
  average_session_length: number,
  completion_rate: number, // Percentage of started content completed
  assessment_average: number,
  
  // Strengths & Weaknesses (Exam Prep)
  strong_areas: string[],
  weak_areas: string[],
  improvement_trends: {
    topic: string,
    trend: 'improving' | 'declining' | 'stable',
    last_updated: Date
  }[],
  
  // Goal Tracking
  learning_goals: {
    id: string,
    description: string,
    target_date: Date,
    progress_percentage: number,
    status: 'active' | 'completed' | 'paused'
  }[],
  
  updated_at: Date
}
```

### Team Progress (For Team Subscriptions)

```typescript
interface TeamProgress {
  team_id: string
  
  // Team Overview
  total_members: number
  active_learners_this_week: number
  team_completion_rate: number
  total_team_ce_hours: number
  
  // Member Progress
  member_progress: {
    user_id: string,
    name: string,
    ce_hours_current_cycle: number,
    courses_completed_this_month: number,
    last_active: Date,
    renewal_date: Date,
    compliance_status: 'on_track' | 'behind' | 'at_risk'
  }[],
  
  // Team Goals
  shared_goals: {
    id: string,
    description: string,
    target_date: Date,
    assigned_members: string[],
    completion_percentage: number
  }[],
  
  updated_at: Date
}
```

---

## Learning Path Architecture

### Path Types

```typescript
enum PathType {
  CERTIFICATION_PREP = 'certification_prep',  // EMT→AEMT, AEMT→Paramedic
  SPECIALIZATION = 'specialization',          // Pediatric, Geriatric, Critical Care
  CE_FOCUSED = 'ce_focused',                  // NREMT renewal requirements
  SKILL_BUILDING = 'skill_building',          // Specific competencies
  CUSTOM = 'custom'                           // User or team-created
}

interface LearningPath {
  id: string
  title: string
  description: string
  type: PathType
  
  // Target Audience
  current_certification_required: string[]
  target_certification?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  
  // Path Structure
  estimated_completion_time: number // hours
  total_ce_hours: number
  required_courses: string[] // Content IDs in order
  optional_courses: string[]
  prerequisites?: string[]
  
  // Tracking
  enrollment_count: number
  completion_rate: number
  average_rating: number
  
  created_at: Date
  updated_at: Date
}

interface UserPathProgress {
  user_id: string
  path_id: string
  
  // Progress
  started_at: Date
  completed_at?: Date
  current_course_id?: string
  courses_completed: string[]
  overall_progress_percentage: number
  
  // Performance
  average_assessment_score: number
  total_time_spent: number
  estimated_completion_date: Date
  
  // Status
  status: 'active' | 'completed' | 'paused'
  
  updated_at: Date
}
```

### Pre-Built Learning Paths

```typescript
const DefaultPaths = [
  // Certification Advancement
  {
    id: 'emt-to-aemt',
    title: 'EMT-B to AEMT Preparation',
    type: PathType.CERTIFICATION_PREP,
    current_certification_required: ['EMT-B'],
    target_certification: 'AEMT',
    courses: [
      'advanced-airway-management',
      'iv-therapy-fundamentals', 
      'advanced-pharmacology',
      'aemt-assessment-skills',
      'aemt-practice-scenarios'
    ]
  },
  
  // CE Requirements
  {
    id: 'nremt-emt-renewal',
    title: 'NREMT EMT-B Renewal (40 Hours)',
    type: PathType.CE_FOCUSED,
    current_certification_required: ['EMT-B'],
    courses: [
      // Distributed across all required categories
    ]
  },
  
  // Specializations
  {
    id: 'pediatric-specialist',
    title: 'Pediatric Emergency Care Specialist',
    type: PathType.SPECIALIZATION,
    current_certification_required: ['EMT-B', 'AEMT', 'EMTP'],
    courses: [
      'pediatric-assessment',
      'pediatric-airway-management',
      'pediatric-medical-emergencies',
      'pediatric-trauma-care',
      'family-centered-care'
    ]
  }
]
```

---

## Compliance & Certification Architecture

### CE Credit Management

```typescript
interface CECredit {
  id: string
  user_id: string
  content_id: string
  session_id: string
  
  // Credit Details
  hours_earned: number
  category: NREMT_Category
  completion_date: Date
  
  // Compliance Verification
  compliance_verified: boolean
  verification_method: 'time_tracking' | 'assessment_score' | 'both'
  assessment_score?: number
  actual_time_spent: number // minutes
  required_time_spent: number // minutes
  
  // Certificate
  certificate_id: string
  certificate_url: string
  
  // Audit Trail
  session_data: {
    tab_switches: number,
    focus_losses: number,
    pause_duration_total: number,
    playback_speed_changes: number[]
  },
  
  created_at: Date
}

interface Certificate {
  id: string
  user_id: string
  content_id: string
  
  // Certificate Data
  completion_date: Date
  ce_hours: number
  ce_category: NREMT_Category
  assessment_score?: number
  
  // Verification
  verification_code: string // For external verification
  qr_code_url: string
  digital_signature: string
  
  // Template & Branding
  template_version: string
  issued_by: 'RescuEd Education Platform'
  
  created_at: Date
}
```

### Transcript Generation

```typescript
interface UserTranscript {
  user_id: string
  generated_at: Date
  period_start: Date
  period_end: Date
  
  // Summary
  total_ce_hours: number
  total_courses_completed: number
  
  // Breakdown by Category
  category_breakdown: {
    category: NREMT_Category,
    hours_earned: number,
    courses_completed: string[]
  }[],
  
  // Detailed Records
  course_records: {
    course_title: string,
    completion_date: Date,
    ce_hours: number,
    ce_category: NREMT_Category,
    assessment_score?: number,
    certificate_id: string
  }[],
  
  // Verification
  transcript_id: string
  verification_url: string
  digital_signature: string
  
  // Formatting
  pdf_url: string
  json_data: object // For API access
}
```

---

## Team & Collaboration Architecture

### Team Management

```typescript
interface Team {
  id: string
  name: string
  organization_name?: string
  
  // Team Settings
  max_members: number
  current_member_count: number
  subscription_type: 'team'
  
  // Learning Configuration
  required_courses: string[] // Courses all members must complete
  team_goals: {
    id: string,
    description: string,
    target_date: Date,
    required_for: 'all' | 'specific_roles'
  }[],
  
  // Administration
  admin_user_ids: string[]
  billing_contact_id: string
  
  created_at: Date
  updated_at: Date
}

interface TeamMember {
  team_id: string
  user_id: string
  role: 'admin' | 'member'
  joined_at: Date
  
  // Team-Specific Progress
  team_required_courses_completed: string[]
  team_goals_progress: {
    goal_id: string,
    progress_percentage: number,
    completed_at?: Date
  }[]
}
```

### Discussion & Collaboration

```typescript
interface Discussion {
  id: string
  content_id: string // Course/module this discussion relates to
  team_id?: string // Team-specific discussion
  
  // Thread Data
  title: string
  description?: string
  started_by: string // user_id
  started_at: Date
  
  // Status
  status: 'active' | 'resolved' | 'archived'
  pinned: boolean
  
  // Engagement
  total_replies: number
  last_activity: Date
  participants: string[] // user_ids
}

interface DiscussionReply {
  id: string
  discussion_id: string
  user_id: string
  
  // Content
  content: string
  reply_to_id?: string // For threaded replies
  
  // Engagement
  upvotes: number
  flagged: boolean
  
  created_at: Date
  updated_at: Date
}
```

---

## Recommendation & Personalization Engine

### Recommendation Algorithm

```typescript
interface RecommendationEngine {
  // Input factors (in priority order)
  factors: {
    regulatory_requirements: {
      weight: 0.4,
      inputs: ['renewal_deadline', 'ce_hours_needed', 'missing_categories']
    },
    certification_level: {
      weight: 0.3,
      inputs: ['current_cert', 'advancement_goals', 'prerequisites_met']
    },
    performance_based: {
      weight: 0.2,
      inputs: ['weak_areas', 'assessment_scores', 'learning_preferences']
    },
    engagement_patterns: {
      weight: 0.1,
      inputs: ['popular_content', 'peer_completions', 'recent_updates']
    }
  }
}

interface UserRecommendations {
  user_id: string
  generated_at: Date
  
  // Prioritized Recommendations
  urgent: {
    reason: 'renewal_deadline' | 'missing_ce_category',
    content_id: string,
    due_date?: Date,
    hours_impact: number
  }[],
  
  suggested: {
    reason: 'career_advancement' | 'skill_improvement' | 'peer_popular',
    content_id: string,
    confidence_score: number,
    estimated_benefit: string
  }[],
  
  explore: {
    reason: 'new_content' | 'different_format' | 'trending',
    content_id: string,
    why_recommended: string
  }[]
}
```

---

## Technical Implementation Architecture

### Database Schema (PostgreSQL)

```sql
-- Core Tables
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  primary_certification VARCHAR(20) NOT NULL,
  renewal_date DATE NOT NULL,
  subscription_type VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  type VARCHAR(20) NOT NULL,
  ce_category VARCHAR(50) NOT NULL,
  ce_hours DECIMAL(3,1) NOT NULL,
  duration_minutes INTEGER NOT NULL,
  certification_levels TEXT[] NOT NULL,
  modules JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE learning_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  content_id UUID REFERENCES content(id),
  mode VARCHAR(20) NOT NULL,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  ce_eligible BOOLEAN DEFAULT FALSE,
  session_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ce_credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  session_id UUID REFERENCES learning_sessions(id),
  hours_earned DECIMAL(3,1) NOT NULL,
  category VARCHAR(50) NOT NULL,
  completion_date DATE NOT NULL,
  certificate_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_users_certification ON users(primary_certification);
CREATE INDEX idx_content_ce_category ON content(ce_category);
CREATE INDEX idx_learning_sessions_user_mode ON learning_sessions(user_id, mode);
CREATE INDEX idx_ce_credits_user_category ON ce_credits(user_id, category);
```

### API Architecture (REST + Real-time)

```typescript
// Core API Endpoints
const APIRoutes = {
  // Authentication
  'POST /auth/login': 'Authenticate user',
  'POST /auth/signup': 'Create new account',
  'POST /auth/refresh': 'Refresh JWT token',
  
  // User Management
  'GET /users/profile': 'Get user profile',
  'PUT /users/profile': 'Update user profile',
  'GET /users/progress': 'Get learning progress',
  'GET /users/recommendations': 'Get personalized recommendations',
  
  // Content Discovery
  'GET /content': 'Browse content (with filters)',
  'GET /content/:id': 'Get specific content details',
  'GET /content/search': 'Search content',
  'GET /learning-paths': 'Get available learning paths',
  
  // Learning Sessions
  'POST /sessions/start': 'Start learning session',
  'PUT /sessions/:id/progress': 'Update session progress',
  'POST /sessions/:id/complete': 'Complete session',
  'GET /sessions/active': 'Get active sessions',
  
  // CE & Certificates
  'GET /ce/progress': 'Get CE hour progress',
  'GET /ce/transcript': 'Generate transcript',
  'GET /certificates/:id': 'Download certificate',
  'GET /certificates/verify/:code': 'Verify certificate',
  
  // Team Features (Team Subscription)
  'GET /teams/:id/members': 'Get team members',
  'GET /teams/:id/progress': 'Get team progress',
  'POST /teams/:id/discussions': 'Create discussion',
  'GET /discussions/:id/replies': 'Get discussion replies',
  
  // Administrative
  'POST /feedback': 'Submit user feedback',
  'GET /health': 'System health check'
}

// WebSocket Events for Real-time Features
const WebSocketEvents = {
  'progress_update': 'Real-time progress updates',
  'team_activity': 'Team member activity notifications', 
  'discussion_reply': 'New discussion replies',
  'achievement_unlocked': 'Learning achievements',
  'session_timeout_warning': 'CE session timeout alerts'
}
```

### Frontend Architecture (React/TypeScript)

```typescript
// Component Structure
src/
├── components/
│   ├── learning/
│   │   ├── ContentPlayer.tsx        // Main learning interface
│   │   ├── SessionModeSelector.tsx  // Choose learning mode
│   │   ├── ProgressTracker.tsx      // Progress visualization
│   │   └── AssessmentEngine.tsx     // Quiz/assessment component
│   ├── dashboard/
│   │   ├── UserDashboard.tsx        // Main user dashboard
│   │   ├── CEProgress.tsx           // CE hours tracking
│   │   ├── Recommendations.tsx      // Personalized suggestions
│   │   └── TeamDashboard.tsx        // Team view (if applicable)
│   ├── content/
│   │   ├── ContentBrowser.tsx       // Content discovery
│   │   ├── ContentCard.tsx          // Content preview cards
│   │   ├── LearningPathView.tsx     // Learning path interface
│   │   └── SearchInterface.tsx      // Content search
│   └── shared/
│       ├── Navigation.tsx           // App navigation
│       ├── Notifications.tsx        // User notifications
│       └── LoadingStates.tsx        // Loading indicators
├── hooks/
│   ├── useAuth.ts                   // Authentication logic
│   ├── useLearningSession.ts        // Session management
│   ├── useProgress.ts               // Progress tracking
│   └── useRecommendations.ts        // Recommendation fetching
├── stores/
│   ├── authStore.ts                 // User authentication state
│   ├── learningStore.ts             // Learning session state
│   ├── progressStore.ts             // Progress and analytics
│   └── contentStore.ts              // Content browsing state
└── utils/
    ├── compliance.ts                // CE compliance logic
    ├── analytics.ts                 // Learning analytics
    └── recommendations.ts           // Recommendation algorithms
```

---

## Implementation Roadmap

### Phase 1: Core Foundation (Months 1-3)
**Goal: MVP that validates core learning mode concept**

**Week 1-4: Authentication & User Management**
- User registration/login
- Basic profile management
- Subscription handling
- Trial period logic

**Week 5-8: Content System**
- Content upload & management
- Basic content player
- Module structure implementation
- Progress tracking foundation

**Week 9-12: Learning Modes**
- Mode selection interface
- Casual vs CE mode implementation
- Basic compliance tracking
- Simple assessment system

**Launch Criteria:**
- Users can sign up and browse content
- Basic learning mode switching works
- CE mode tracks time and prevents skipping
- Simple certificates generated

### Phase 2: Enhanced Learning (Months 4-6)
**Goal: Full-featured learning experience**

**Month 4: Advanced Content Features**
- Interactive modules
- Video player with compliance features
- Note-taking system
- Bookmark/favorites

**Month 5: Progress & Analytics**
- Detailed progress tracking
- Basic recommendations
- CE hour categorization
- Progress visualization

**Month 6: Assessment & Certification**
- Advanced assessment engine
- Certificate generation
- Transcript system
- Verification system

### Phase 3: Personalization & Teams (Months 7-9)
**Goal: Personalized experience and team features**

**Month 7: Recommendation Engine**
- Smart content recommendations
- Learning path suggestions
- Performance-based recommendations
- Deadline tracking

**Month 8: Team Features**
- Team dashboard
- Shared progress tracking
- Discussion system
- Team goals

**Month 9: Advanced Analytics**
- Detailed learning analytics
- Weak area identification
- Performance trends
- Custom reports

### Phase 4: Polish & Scale (Months 10-12)
**Goal: Production-ready platform**

**Month 10: Mobile Optimization**
- Progressive Web App
- Offline learning capability
- Mobile-specific features
- Performance optimization

**Month 11: Advanced Features**
- Learning paths
- Advanced search
- Content recommendations
- Social features

**Month 12: Launch Preparation**
- Performance testing
- Security audit
- Content library expansion
- Marketing preparation

---

## Success Metrics & Analytics

### Key Performance Indicators (KPIs)

**User Engagement:**
- Daily/Monthly Active Users
- Average session duration
- Course completion rates
- Return user percentage

**Educational Outcomes:**
- Assessment score improvements
- CE compliance rates
- Certification advancement rates
- User satisfaction scores

**Business Metrics:**
- Trial to paid conversion rate
- Monthly recurring revenue (MRR)
- Customer lifetime value (CLV)
- Churn rate

**Content Quality:**
- Content rating averages
- Completion rates by content
- User feedback sentiment
- Time to complete vs estimated

### Analytics Implementation

```typescript
interface AnalyticsEvent {
  event_type: string
  user_id: string
  session_id?: string
  content_id?: string
  timestamp: Date
  properties: Record<string, any>
}

// Example Events
const AnalyticsEvents = {
  'session_started': {
    content_id: string,
    mode: LearningMode,
    device_type: string
  },
  'module_completed': {
    module_id: string,
    time_spent: number,
    completion_method: 'video_end' | 'skip_allowed' | 'assessment_passed'
  },
  'assessment_submitted': {
    assessment_id: string,
    score: number,
    attempts: number,
    time_taken: number
  },
  'ce_credit_earned': {
    content_id: string,
    hours_earned: number,
    category: NREMT_Category
  },
  'subscription_converted': {
    from_plan: string,
    to_plan: string,
    conversion_source: string
  }
}
```

---

## Security & Compliance Considerations

### Data Security
- **Encryption**: All PII encrypted at rest and in transit
- **Authentication**: JWT tokens with refresh mechanism
- **Authorization**: Role-based access control
- **Audit Logging**: All CE-related actions logged for compliance

### Educational Compliance
- **NREMT Approval**: Seek approval as continuing education provider
- **Medical Director Oversight**: All clinical content reviewed
- **Accreditation**: Pursue relevant educational accreditations
- **State Compliance**: Handle varying state requirements (future)

### Privacy Protection
- **FERPA Compliance**: Educational records protection
- **User Consent**: Clear data usage policies
- **Data Retention**: Appropriate retention periods
- **Right to Delete**: User data deletion capabilities

---

## Conclusion

This architecture provides a solid foundation for building RescuEd as a professional, compliant, and valuable EMS education platform. The key innovation—separating content from consumption modes—allows maximum flexibility while maintaining regulatory compliance.

The phased implementation approach ensures we can validate core concepts quickly while building toward a comprehensive platform that truly serves the needs of working EMS providers.

**Core Success Factors:**

1. **Provider-First Design** - Every feature decision filtered through "Does this help a working provider?"
2. **Content Quality Over Quantity** - Better to have 20 excellent courses than 200 mediocre ones
3. **Flexible Learning Modes** - Same content, different rules based on user intent
4. **Compliance Without Compromise** - Meet regulatory requirements without sacrificing user experience
5. **Community Integration** - Foster connections between providers for shared learning

**Next Steps:**
1. Validate core learning mode concept with provider interviews
2. Build MVP focusing on content player and mode switching
3. Partner with experienced EMS educators for content creation
4. Test compliance tracking with small group of beta users
5. Iterate based on real provider feedback

This architecture balances ambitious vision with practical implementation, ensuring RescuEd can grow into the professional education platform EMS providers deserve while remaining true to its core mission of provider-focused, high-quality education.