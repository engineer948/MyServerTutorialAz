export interface Step {
  id: number;
  title: string;
  description: string;
  detail?: string;
}

export interface DistributionInfo {
  id: 'ubuntu' | 'fedora';
  name: string;
  tagline: string;
  badge: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyLabel: string;
  packageManager: string;
  initSystem: string;
  pros: string[];
  cons: string[];
  recommendationReason: string;
}

export interface FeedbackForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
